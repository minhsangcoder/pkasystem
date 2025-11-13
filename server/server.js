// server/server.js - FIXED VERSION
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { Sequelize, DataTypes } from "sequelize";
import fs from "fs";
import path from "path";

const app = express();
const PORT = 8000;

// =======================
// Middleware - FIXED CORS
// =======================
app.use(cors({
  origin: [
    "http://localhost:3000", // Vite dev server default
    "http://localhost:3001", // Custom port nếu có
    "http://localhost:3002", // Additional port
    "http://127.0.0.1:3000",
    "http://127.0.0.1:3001",
    "http://127.0.0.1:3002",
    "http://127.0.0.1:3003"
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] [${req.method}] ${req.url} - IP: ${req.ip || req.connection.remoteAddress}`);
  next();
});

// =======================
// Database Connection - SQLite Configuration
// =======================
// Ensure database directory exists for SQLite file storage
const dbDirectory = path.join(process.cwd(), "database");
if (!fs.existsSync(dbDirectory)) {
  fs.mkdirSync(dbDirectory, { recursive: true });
}

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "database/training.sqlite",
  logging: console.log,
});

// Test database connection
async function testConnection() {
  try {
    console.log("[DB] Attempting to connect to SQLite database...")
    await sequelize.authenticate();

    // Enable useful SQLite PRAGMAs
    try {
      await sequelize.query('PRAGMA foreign_keys = ON');
      await sequelize.query('PRAGMA journal_mode = WAL');
      await sequelize.query('PRAGMA synchronous = NORMAL');
      console.log("✅ [DB] SQLite PRAGMAs enabled: foreign_keys, WAL, synchronous=NORMAL");
    } catch (pragmaErr) {
      console.warn("⚠️ [DB] Could not set SQLite PRAGMAs:", pragmaErr.message);
    }

    console.log("✅ [DB] SQLite connection established successfully!");

    // await sequelize.sync({ force: true });
    // const [results] = await sequelize.query("DESCRIBE course_categories;");
    // console.log("📋 [DB] Fields in table course_categories:");
    // console.table(results);

    return true;
  } catch (error) {
    console.error("❌ [DB] SQLite connection failed:", error.message);
    return false;
  }
}

// Load sample data if tables are empty
async function loadSampleData() {
  try {
    console.log("[DB] Checking for sample data...");

    // Check if we already have data
    const departmentCount = await Department.count();
    if (departmentCount > 0) {
      console.log("[DB] Sample data already exists, skipping...");
      return;
    }

    console.log("[DB] Loading sample data...");

    // Create course categories
    const courseCategories = await CourseCategory.bulkCreate([
      { category_code: 'TECH', category_name: 'Công nghệ thông tin', description: 'Các khóa học về công nghệ thông tin và lập trình' },
      { category_code: 'MANAGE', category_name: 'Quản lý', description: 'Các khóa học về kỹ năng quản lý và lãnh đạo' },
      { category_code: 'SOFT', category_name: 'Kỹ năng mềm', description: 'Các khóa học về kỹ năng giao tiếp và làm việc nhóm' },
      { category_code: 'LANG', category_name: 'Ngoại ngữ', description: 'Các khóa học về ngoại ngữ' }
    ]);

    // Create departments
    const departments = await Department.bulkCreate([
      { department_code: 'IT', department_name: 'Phòng Công nghệ thông tin', description: 'Phòng phụ trách về công nghệ thông tin' },
      { department_code: 'HR', department_name: 'Phòng Nhân sự', description: 'Phòng phụ trách về quản lý nhân sự' },
      { department_code: 'FIN', department_name: 'Phòng Tài chính', description: 'Phòng phụ trách về tài chính kế toán' },
      { department_code: 'MKT', department_name: 'Phòng Marketing', description: 'Phòng phụ trách về marketing và bán hàng' }
    ]);

    // Create positions
    const positions = await Position.bulkCreate([
      { position_code: 'DEV', position_name: 'Lập trình viên', level: 3, description: 'Phát triển phần mềm', department_id: 1 },
      { position_code: 'PM', position_name: 'Quản lý dự án', level: 4, description: 'Quản lý các dự án công nghệ', department_id: 1 },
      { position_code: 'HR_MGR', position_name: 'Trưởng phòng nhân sự', level: 5, description: 'Quản lý phòng nhân sự', department_id: 2 },
      { position_code: 'HR_SPEC', position_name: 'Chuyên viên nhân sự', level: 3, description: 'Chuyên viên phụ trách nhân sự', department_id: 2 },
      { position_code: 'ACCOUNTANT', position_name: 'Kế toán', level: 3, description: 'Kế toán viên', department_id: 3 },
      { position_code: 'MKT_MGR', position_name: 'Trưởng phòng marketing', level: 5, description: 'Quản lý phòng marketing', department_id: 4 }
    ]);

    // Create employees
    const employees = await Employee.bulkCreate([
      { employee_code: 'EMP001', first_name: 'Nguyễn Văn', last_name: 'An', email: 'an.nguyen@company.com', phone: '0123456789', position_id: 1, department_id: 1, hire_date: '2023-01-15', salary: 15000000, employee_type: 'staff' },
      { employee_code: 'EMP002', first_name: 'Trần Thị', last_name: 'Bình', email: 'binh.tran@company.com', phone: '0123456790', position_id: 2, department_id: 1, hire_date: '2022-06-01', salary: 20000000, employee_type: 'lecturer' },
      { employee_code: 'EMP003', first_name: 'Lê Văn', last_name: 'Cường', email: 'cuong.le@company.com', phone: '0123456791', position_id: 3, department_id: 2, hire_date: '2021-03-10', salary: 25000000, employee_type: 'lecturer' },
      { employee_code: 'EMP004', first_name: 'Phạm Thị', last_name: 'Dung', email: 'dung.pham@company.com', phone: '0123456792', position_id: 4, department_id: 2, hire_date: '2023-02-20', salary: 12000000, employee_type: 'staff' },
      { employee_code: 'EMP005', first_name: 'Hoàng Văn', last_name: 'Em', email: 'em.hoang@company.com', phone: '0123456793', position_id: 5, department_id: 3, hire_date: '2022-11-05', salary: 13000000, employee_type: 'staff' },
      { employee_code: 'EMP006', first_name: 'Vũ Thị', last_name: 'Phương', email: 'phuong.vu@company.com', phone: '0123456794', position_id: 6, department_id: 4, hire_date: '2021-08-15', salary: 22000000, employee_type: 'lecturer' },
    ]);

    // Update department managers
    await Department.update({ manager_id: 2 }, { where: { id: 1 } });
    await Department.update({ manager_id: 3 }, { where: { id: 2 } });
    await Department.update({ manager_id: 5 }, { where: { id: 3 } });
    await Department.update({ manager_id: 6 }, { where: { id: 4 } });

    console.log("✅ [DB] Sample data loaded successfully!");
  } catch (error) {
    console.error("❌ [DB] Failed to load sample data:", error.message);
  }
}

// Recalculate total_credits for a single program based on linked KnowledgeBlocks
async function recalculateProgramTotalCredits(programInstance) {
  try {
    const program = await Program.findByPk(programInstance.id, {
      include: [
        {
          model: KnowledgeBlock,
          attributes: ["id", "total_credits"],
          through: { attributes: [] }
        }
      ]
    });
    if (!program) return;
    const data = program.toJSON();
    const sum = Array.isArray(data.KnowledgeBlocks)
      ? data.KnowledgeBlocks.reduce((acc, kb) => acc + (Number(kb.total_credits) || 0), 0)
      : 0;
    await program.update({ total_credits: sum });
  } catch (e) {
    console.warn("⚠️ [DB] Failed to recalculate program total_credits:", e.message);
  }
}

// Recalculate total_credits for all programs (useful for backfilling existing data)
async function backfillAllProgramsTotalCredits() {
  try {
    console.log("[DB] Backfilling total_credits for programs...");
    const allPrograms = await Program.findAll({ attributes: ["id"] });
    for (const p of allPrograms) {
      await recalculateProgramTotalCredits(p);
    }
    console.log("✅ [DB] Backfill total_credits completed");
  } catch (e) {
    console.warn("⚠️ [DB] Backfill total_credits failed:", e.message);
  }
}

async function applyDatabasePatches() {
  const qi = sequelize.getQueryInterface();
  console.log("[DB] Applying database patches...");

  // Ensure employees table has degree column
  try {
    const employeeColumns = await qi.describeTable("employees");
    if (employeeColumns && !employeeColumns.degree) {
      console.log("[DB] Adding 'degree' column to employees...");
      await qi.addColumn("employees", "degree", {
        type: DataTypes.STRING(50),
        allowNull: true,
      });
      console.log("✅ [DB] Added 'degree' column to employees");
    }
  } catch (err) {
    console.warn("⚠️ [DB] Could not inspect/add columns to employees:", err.message);
  }

  // Ensure curriculum_structures has program_id column
  try {
    const csColumns = await qi.describeTable("curriculum_structures");
    if (csColumns && !csColumns.program_id) {
      console.log("[DB] Adding 'program_id' column to curriculum_structures...");
      await qi.addColumn("curriculum_structures", "program_id", {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "programs",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      });
      console.log("✅ [DB] Added 'program_id' column to curriculum_structures");
    }
  } catch (err) {
    console.warn("⚠️ [DB] Could not inspect/add columns to curriculum_structures:", err.message);
  }

  // Ensure programs table has total_credits column
  try {
    const programColumns = await qi.describeTable("programs");
    if (programColumns && !programColumns.total_credits) {
      console.log("[DB] Adding 'total_credits' column to programs...");
      await qi.addColumn("programs", "total_credits", {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
      });
      console.log("✅ [DB] Added 'total_credits' column to programs");
    }
  } catch (err) {
    console.warn("⚠️ [DB] Could not inspect/add columns to programs:", err.message);
  }

  // Ensure program_courses join table exists
  try {
    const tables = await qi.showAllTables();
    const normalizedTables = Array.isArray(tables)
      ? tables
          .map((t) => {
            if (typeof t === "string") return t.toLowerCase();
            if (t && typeof t === "object") {
              if (typeof t.tableName === "string") return t.tableName.toLowerCase();
              if (typeof t.name === "string") return t.name.toLowerCase();
            }
            return "";
          })
          .filter(Boolean)
      : [];
    if (!normalizedTables.includes("program_courses")) {
      console.log("[DB] Creating 'program_courses' join table...");
      await qi.createTable("program_courses", {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        program_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "programs",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
        course_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "courses",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
        semester: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        notes: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        created_at: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updated_at: {
          type: DataTypes.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
      });
      await qi.addConstraint("program_courses", {
        type: "unique",
        fields: ["program_id", "course_id"],
        name: "program_courses_unique_program_course",
      });
      console.log("✅ [DB] Created 'program_courses' join table");
    } else {
      const programCourseColumns = await qi.describeTable("program_courses");
      if (programCourseColumns && !programCourseColumns.semester) {
        console.log("[DB] Adding 'semester' column to program_courses...");
        await qi.addColumn("program_courses", "semester", {
          type: DataTypes.INTEGER,
          allowNull: true,
        });
        console.log("✅ [DB] Added 'semester' column to program_courses");
      }
      if (programCourseColumns && !programCourseColumns.notes) {
        console.log("[DB] Adding 'notes' column to program_courses...");
        await qi.addColumn("program_courses", "notes", {
          type: DataTypes.TEXT,
          allowNull: true,
        });
        console.log("✅ [DB] Added 'notes' column to program_courses");
      }
    }
  } catch (err) {
    console.warn("⚠️ [DB] Could not ensure program_courses table:", err.message);
  }
}

// =======================
// Models - ENHANCED WITH STATUS
// =======================
const Department = sequelize.define("Department", {
  department_code: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
      len: [1, 20]
    }
  },
  department_name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      notEmpty: true,
      len: [1, 100]
    }
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  parent_department_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  manager_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  tableName: "departments",
  timestamps: true,
  underscored: true
});

const Position = sequelize.define("Position", {
  position_code: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true
  },
  position_name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  level: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  department_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  tableName: "positions",
  timestamps: true,
  underscored: true
});

const Employee = sequelize.define("Employee", {
  employee_code: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true
  },
  first_name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  phone: {
    type: DataTypes.STRING(20)
  },
  address: {
    type: DataTypes.TEXT
  },
  date_of_birth: {
    type: DataTypes.DATEONLY
  },
  gender: {
    type: DataTypes.STRING(10),
    defaultValue: 'Other'
  },
  degree: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  employee_type: {
    type: DataTypes.STRING(20),
    allowNull: false,
    defaultValue: 'staff',
    validate: {
      isIn: [['lecturer', 'staff']]
    }
  },
  id_card: {
    type: DataTypes.STRING(20),
    unique: true
  },
  position_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  department_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  manager_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  hire_date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  salary: {
    type: DataTypes.DECIMAL(12, 2)
  },
  status: {
    type: DataTypes.STRING(20),
    defaultValue: 'Active'
  }
}, {
  tableName: "employees",
  timestamps: true,
  underscored: true
});

const CourseCategory = sequelize.define("CourseCategory", {
  category_code: {
    type: DataTypes.STRING(20),
    allowNull: false,
    validate: { notEmpty: true, len: [1, 20] },
  },

  // Tên danh mục (NOT NULL)
  category_name: {
    type: DataTypes.STRING(255),
    allowNull: false,
    validate: { notEmpty: true, len: [1, 255] },
  },

  // Mô tả
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },

  // Trạng thái hoạt động (bảng của bạn dùng is_active BOOLEAN)
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, {
  tableName: "course_categories",
  timestamps: true,
  underscored: true
});

const Course = sequelize.define("Course", {
  course_code: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  },
  course_name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  description: DataTypes.TEXT,
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  duration_hours: DataTypes.INTEGER,
  total_credits: DataTypes.INTEGER,
  theory_credits: DataTypes.INTEGER,
  practice_credits: DataTypes.INTEGER,
  level: {
    type: DataTypes.STRING(50),
    defaultValue: 'Beginner'
  },
  prerequisite_course_ids: DataTypes.TEXT,
  concurrent_course_ids: DataTypes.TEXT,
  learning_objectives: DataTypes.TEXT,
  department_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  created_by: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  // price_per_credit: {
  //   type: DataTypes.DECIMAL(10, 2),
  //   defaultValue: 500000, // Giá mặc định 500,000 VND/tín chỉ
  //   allowNull: false
  // },
  knowledge_block_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  // status: {
  //   type: DataTypes.ENUM('draft', 'active', 'completed', 'cancelled'),
  //   defaultValue: 'draft'
  // }
}, {
  tableName: "courses",
  timestamps: true,
  underscored: true
});


const CourseSession = sequelize.define("CourseSession", {
  start_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  end_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  max_participants: {
    type: DataTypes.INTEGER,
    defaultValue: 30
  },
  status: {
    type: DataTypes.STRING(20),
    defaultValue: 'scheduled',
    validate: {
      isIn: [['scheduled', 'in_progress', 'completed', 'cancelled']]
    }
  }
}, {
  tableName: "course_sessions",
  timestamps: true,
  underscored: true
});

const Enrollment = sequelize.define("Enrollment", {
  status: {
    type: DataTypes.STRING(20),
    defaultValue: "pending",
    validate: {
      isIn: [['pending', 'approved', 'rejected', 'completed']]
    }
  },
  enrolled_date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: "enrollments",
  timestamps: true,
  underscored: true
});

const Cohort = sequelize.define("Cohort", {
  cohort_code: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  },
  cohort_name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  start_date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  end_date: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  max_students: {
    type: DataTypes.INTEGER,
    defaultValue: 30
  },
  current_students: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  status: {
    type: DataTypes.STRING(20),
    defaultValue: 'planning',
    validate: {
      isIn: [['planning', 'active', 'completed', 'cancelled']]
    }
  },
  program_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  instructor_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  tableName: "cohorts",
  timestamps: true,
  underscored: true
});

const Major = sequelize.define("Major", {
  major_code: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  },
  major_name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  degree_type: {
    type: DataTypes.STRING(20),
    defaultValue: 'bachelor',
    validate: {
      isIn: [['associate', 'bachelor', 'master', 'doctorate']]
    }
  },
  duration_years: {
    type: DataTypes.INTEGER,
    defaultValue: 4
  },
  total_credits: {
    type: DataTypes.INTEGER,
    defaultValue: 120
  },
  department_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  head_of_major_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  tableName: "majors",
  timestamps: true,
  underscored: true
});

const KnowledgeBlock = sequelize.define("KnowledgeBlock", {
  block_code: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  },
  block_name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  total_credits: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  is_required: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  major_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  tableName: "knowledge_blocks",
  timestamps: true,
  underscored: true
});

const CurriculumStructure = sequelize.define("CurriculumStructure", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  program_id: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  major_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  knowledge_block_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  semester: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  is_required: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  },
  min_credits: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: "curriculum_structures",
  timestamps: true,
  underscored: true
});

// Program model
const Program = sequelize.define("Program", {
  program_code: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  },
  program_name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  total_credits: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null,
    validate: {
      min: 0
    }
  },
  start_date: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  end_date: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  is_active: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  tableName: "programs",
  timestamps: true,
  underscored: true
});

const ProgramCourse = sequelize.define("ProgramCourse", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  program_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "programs",
      key: "id"
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  },
  course_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "courses",
      key: "id"
    },
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
  },
  semester: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: "program_courses",
  timestamps: true,
  underscored: true
});

// =======================
// Associations (FIXED)
// =======================

// Department – Position – Employee
Department.hasMany(Position, { foreignKey: 'department_id' });
Position.belongsTo(Department, { foreignKey: 'department_id' });

Department.hasMany(Employee, { foreignKey: 'department_id' });
Employee.belongsTo(Department, { foreignKey: 'department_id' });

Position.hasMany(Employee, { foreignKey: 'position_id' });
Employee.belongsTo(Position, { foreignKey: 'position_id' });

// Course relations
CourseCategory.hasMany(Course, { foreignKey: 'category_id' });
Course.belongsTo(CourseCategory, { foreignKey: 'category_id', as: 'CourseCategory' });
Course.belongsTo(Department, { foreignKey: 'department_id', as: 'Department' });
Course.belongsTo(Employee, { foreignKey: 'created_by', as: 'CreatedBy' });

Course.hasMany(CourseSession, { foreignKey: 'course_id' });
CourseSession.belongsTo(Course, { foreignKey: 'course_id' });

Employee.hasMany(Enrollment, { foreignKey: 'employee_id' });
Enrollment.belongsTo(Employee, { foreignKey: 'employee_id' });

CourseSession.hasMany(Enrollment, { foreignKey: 'course_session_id' });
Enrollment.belongsTo(CourseSession, { foreignKey: 'course_session_id' });

// Program – Cohort – Employee
Program.hasMany(Cohort, { foreignKey: 'program_id' });
Cohort.belongsTo(Program, { foreignKey: 'program_id', as: 'Program' });

Employee.hasMany(Cohort, { foreignKey: 'instructor_id' });
Cohort.belongsTo(Employee, { foreignKey: 'instructor_id', as: 'Instructor' });

Program.belongsToMany(KnowledgeBlock, { through: 'program_knowledge_blocks', foreignKey: 'program_id', otherKey: 'knowledge_block_id' });
KnowledgeBlock.belongsToMany(Program, { through: 'program_knowledge_blocks', foreignKey: 'knowledge_block_id', otherKey: 'program_id' });

Program.belongsToMany(Course, { through: ProgramCourse, as: 'Courses', foreignKey: 'program_id', otherKey: 'course_id' });
Course.belongsToMany(Program, { through: ProgramCourse, as: 'Programs', foreignKey: 'course_id', otherKey: 'program_id' });
Program.hasMany(ProgramCourse, { foreignKey: 'program_id', as: 'ProgramCourses' });
ProgramCourse.belongsTo(Program, { foreignKey: 'program_id' });
Course.hasMany(ProgramCourse, { foreignKey: 'course_id', as: 'ProgramCourses' });
ProgramCourse.belongsTo(Course, { foreignKey: 'course_id' });

// Department – Major – Employee
Department.hasMany(Major, { foreignKey: 'department_id' });
Major.belongsTo(Department, { foreignKey: 'department_id', as: 'Department' });

Employee.hasMany(Major, { foreignKey: 'head_of_major_id' });
Major.belongsTo(Employee, { foreignKey: 'head_of_major_id', as: 'HeadOfMajor' });

// Major – KnowledgeBlock
Major.hasMany(KnowledgeBlock, { foreignKey: 'major_id', as: 'KnowledgeBlocks' });
KnowledgeBlock.belongsTo(Major, { foreignKey: 'major_id', as: 'Major' });

// KnowledgeBlock – Course
KnowledgeBlock.hasMany(Course, { foreignKey: 'knowledge_block_id', as: 'Courses' });
Course.belongsTo(KnowledgeBlock, { foreignKey: 'knowledge_block_id', as: 'KnowledgeBlock' });

// ✅ Program – CurriculumStructure
Program.hasMany(CurriculumStructure, { foreignKey: 'program_id', as: 'CurriculumStructures' });
CurriculumStructure.belongsTo(Program, { foreignKey: 'program_id', as: 'Program' });

// ✅ Major – CurriculumStructure
Major.hasMany(CurriculumStructure, { foreignKey: 'major_id', as: 'CurriculumStructures' });
CurriculumStructure.belongsTo(Major, { foreignKey: 'major_id', as: 'Major' });

// ✅ KnowledgeBlock – CurriculumStructure
KnowledgeBlock.hasMany(CurriculumStructure, { foreignKey: 'knowledge_block_id', as: 'CurriculumStructures' });
CurriculumStructure.belongsTo(KnowledgeBlock, { foreignKey: 'knowledge_block_id', as: 'KnowledgeBlock' });

CurriculumStructure.associate = (models) => {
  CurriculumStructure.belongsTo(models.Program, { foreignKey: 'program_id' });
  CurriculumStructure.belongsTo(models.Major, { foreignKey: 'major_id' });
  CurriculumStructure.belongsTo(models.KnowledgeBlock, { foreignKey: 'knowledge_block_id' });
};
// =======================
// Helper function to handle errors
// =======================
const handleError = (res, error, defaultMessage = "Internal server error") => {
  const timestamp = new Date().toISOString();
  console.error(`[${timestamp}] [API Error] ${error.name}:`, error.message);

  if (error.name === 'SequelizeValidationError') {
    return res.status(400).json({
      error: error.errors.map(e => e.message).join(', ')
    });
  }

  if (error.name === 'SequelizeUniqueConstraintError') {
    return res.status(400).json({
      error: "Dữ liệu đã tồn tại"
    });
  }

  res.status(500).json({
    error: error.message || defaultMessage
  });
};

const safeCount = async (model, options = {}) => {
  try {
    return await model.count(options);
  } catch (error) {
    const modelName = model?.name || "UnknownModel";
    console.warn(`⚠️ [DB] Count failed for ${modelName}:`, error.message);
    return 0;
  }
};

// =======================
// API Routes - ENHANCED WITH BETTER ERROR HANDLING
// =======================

// Health check endpoint
app.get("/api/health", (req, res) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] [HEALTH] Health check requested`);

  res.json({
    success: true,
    message: "Server is running",
    timestamp,
    database: sequelize.connectionManager.pool ? "connected" : "disconnected"
  });
});

// ---- Departments ----
app.get("/api/departments", async (req, res) => {
  try {
    const departments = await Department.findAll({
      order: [['created_at', 'DESC']]
    });
    res.json(departments);
  } catch (error) {
    handleError(res, error, "Không thể tải danh sách phòng ban");
  }
});

app.get("/api/departments/:id", async (req, res) => {
  try {
    const department = await Department.findByPk(req.params.id);
    if (!department) {
      return res.status(404).json({ error: "Không tìm thấy phòng ban" });
    }
    res.json(department);
  } catch (error) {
    handleError(res, error, "Không thể tải thông tin phòng ban");
  }
});

app.post("/api/departments", async (req, res) => {
  try {
    const { department_code, department_name, description, parent_department_id, manager_id, is_active = true } = req.body;

    console.log(req.body);

    if (!department_code || !department_name) {
      return res.status(400).json({
        error: "Mã phòng ban và tên phòng ban là bắt buộc"
      });
    }

    // Convert empty strings to null for integer fields
    const cleanParentDepartmentId = parent_department_id === '' ? null : parent_department_id;
    const cleanManagerId = manager_id === '' ? null : manager_id;

    const department = await Department.create({
      department_code,
      department_name,
      description,
      parent_department_id: cleanParentDepartmentId,
      manager_id: cleanManagerId,
      is_active
    });

    res.status(201).json(department);
  } catch (error) {
    handleError(res, error, "Không thể thêm phòng ban");
  }
});

app.put("/api/departments/:id", async (req, res) => {
  try {
    const department = await Department.findByPk(req.params.id);
    if (!department) {
      return res.status(404).json({ error: "Không tìm thấy phòng ban" });
    }

    // Convert empty strings to null for integer fields
    const updateData = { ...req.body };
    if (updateData.parent_department_id === '') {
      updateData.parent_department_id = null;
    }
    if (updateData.manager_id === '') {
      updateData.manager_id = null;
    }

    await department.update(updateData);
    res.json(department);
  } catch (error) {
    handleError(res, error, "Không thể cập nhật phòng ban");
  }
});

app.delete("/api/departments/:id", async (req, res) => {
  try {
    const department = await Department.findByPk(req.params.id);
    if (!department) {
      return res.status(404).json({ error: "Không tìm thấy phòng ban" });
    }

    // Check if department has employees
    const employeeCount = await Employee.count({
      where: { department_id: req.params.id }
    });

    if (employeeCount > 0) {
      return res.status(400).json({
        error: "Không thể xóa phòng ban có nhân viên"
      });
    }

    await department.destroy();
    res.json({ message: "Xóa phòng ban thành công" });
  } catch (error) {
    handleError(res, error, "Không thể xóa phòng ban");
  }
});

// ---- Positions ---- (Similar pattern for other endpoints)
app.get("/api/positions", async (req, res) => {
  try {
    const positions = await Position.findAll({
      include: [{
        model: Department,
        attributes: ['id', 'department_name', 'department_code']
      }],
      order: [['created_at', 'DESC']]
    });
    res.json(positions);
  } catch (error) {
    handleError(res, error, "Không thể tải danh sách chức vụ");
  }
});

app.post("/api/positions", async (req, res) => {
  try {
    const { position_code, position_name, level, description, department_id, is_active = true } = req.body;

    // Convert empty string to null for department_id
    const cleanDepartmentId = department_id === '' ? null : department_id;

    if (!position_code || !position_name || !cleanDepartmentId) {
      return res.status(400).json({
        error: "Mã chức vụ, tên chức vụ và phòng ban là bắt buộc"
      });
    }

    const position = await Position.create({
      position_code,
      position_name,
      level,
      description,
      department_id: cleanDepartmentId,
      is_active
    });

    res.status(201).json(position);
  } catch (error) {
    handleError(res, error, "Không thể thêm chức vụ");
  }
});

app.put("/api/positions/:id", async (req, res) => {
  try {
    const position = await Position.findByPk(req.params.id);
    if (!position) {
      return res.status(404).json({ error: "Không tìm thấy chức vụ" });
    }
    await position.update(req.body);
    res.json(position);
  } catch (error) {
    handleError(res, error, "Không thể cập nhật chức vụ");
  }
});

app.delete("/api/positions/:id", async (req, res) => {
  try {
    const position = await Position.findByPk(req.params.id);
    if (!position) {
      return res.status(404).json({ error: "Không tìm thấy chức vụ" });
    }
    await position.destroy();
    res.json({ message: "Xóa chức vụ thành công" });
  } catch (error) {
    handleError(res, error, "Không thể xóa chức vụ");
  }
});

app.post("/api/courses", async (req, res) => {
  try {
    let {
      course_code, course_name, description, category_id,
      duration_hours, total_credits, theory_credits, practice_credits, level,
      prerequisite_course_ids, concurrent_course_ids, learning_objectives,
      department_id, created_by, is_active = true
    } = req.body;

    if (!course_code || !course_name) {
      return res.status(400).json({ error: "Mã học phần và tên học phần là bắt buộc" });
    }

    // Nếu frontend gửi "" thì convert thành null
    if (category_id === "" || category_id === undefined) category_id = null;
    if (department_id === "" || department_id === undefined) department_id = null;
    if (created_by === "" || created_by === undefined) created_by = null;

    const course = await Course.create({
      course_code,
      course_name,
      description,
      category_id,
      duration_hours,
      total_credits,
      theory_credits,
      practice_credits,
      level,
      prerequisite_course_ids,
      concurrent_course_ids,
      learning_objectives,
      department_id,
      created_by,
      is_active
    });

    res.status(201).json(course);
  } catch (error) {
    handleError(res, error, "Không thể thêm học phần");
  }
});


app.get("/api/courses", async (req, res) => {
  try {
    const courses = await Course.findAll({
      include: [
        { model: CourseCategory, as: "CourseCategory", required: false, attributes: ["id", "category_name"] },
        { model: Department, as: "Department", required: false, attributes: ["id", "department_name"] },
        { model: Employee, as: "CreatedBy", required: false, attributes: ["id", "first_name", "last_name"] }
      ],
      order: [["created_at", "DESC"]]
    });
    res.json(courses);
  } catch (error) {
    handleError(res, error, "Không thể tải danh sách học phần");
  }
});

// Cập nhật học phần
app.put("/api/courses/:id", async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.id);
    if (!course) {
      return res.status(404).json({ error: "Không tìm thấy học phần" });
    }

    // Chỉ cho phép update những field hợp lệ
    const allowedFields = [
      "course_name",
      "description",
      "category_id",
      "duration_hours",
      "total_credits",
      "theory_credits",
      "practice_credits",
      "level",
      "prerequisite_course_ids",
      "concurrent_course_ids",
      "learning_objectives",
      "department_id",
      "is_active"
    ];

    await course.update(req.body, { fields: allowedFields });
    res.json(course);
  } catch (error) {
    handleError(res, error, "Không thể cập nhật học phần");
  }
});

// Xóa học phần
app.delete("/api/courses/:id", async (req, res) => {
  try {
    const course = await Course.findByPk(req.params.id);
    if (!course) {
      return res.status(404).json({ error: "Không tìm thấy học phần" });
    }

    await course.destroy();
    res.json({ message: "Xóa học phần thành công" });
  } catch (error) {
    handleError(res, error, "Không thể xóa học phần");
  }
});

app.get("/api/course-categories", async (req, res) => {
  try {
    const categories = await CourseCategory.findAll({
      order: [["created_at", "DESC"]],
    });
    res.json(categories);
  } catch (error) {
    handleError(res, error, "Không thể tải danh sách danh mục học phần");
  }
});

// GET 1 course category by id
app.get("/api/course-categories/:id", async (req, res) => {
  try {
    const category = await CourseCategory.findByPk(req.params.id);
    if (!category) {
      return res.status(404).json({ error: "Không tìm thấy danh mục học phần" });
    }
    res.json(category);
  } catch (error) {
    handleError(res, error, "Không thể tải thông tin danh mục học phần");
  }
});

// ---- Employees ----
app.get("/api/employees", async (req, res) => {
  try {
    const { type } = req.query; // ?type=lecturer hoặc ?type=staff

    const where = {};
    if (type && ['lecturer', 'staff'].includes(type)) {
      where.employee_type = type;
    }

    const employees = await Employee.findAll({
      where,
      include: [
        {
          model: Department,
          attributes: ['id', 'department_name', 'department_code']
        },
        {
          model: Position,
          attributes: ['id', 'position_name', 'position_code', 'level']
        }
      ],
      order: [['created_at', 'DESC']]
    });
    res.json(employees);
  } catch (error) {
    handleError(res, error, "Không thể tải danh sách nhân viên");
  }
});

// ---- Lecturers (Giảng viên) ----
app.get("/api/lecturers", async (req, res) => {
  try {
    const lecturers = await Employee.findAll({
      where: { employee_type: 'lecturer' },
      include: [
        {
          model: Department,
          attributes: ['id', 'department_name', 'department_code']
        },
        {
          model: Position,
          attributes: ['id', 'position_name', 'position_code', 'level']
        }
      ],
      order: [['created_at', 'DESC']]
    });
    res.json(lecturers);
  } catch (error) {
    handleError(res, error, "Không thể tải danh sách giảng viên");
  }
});

// ---- Staff (Nhân viên hành chính) ----
app.get("/api/staff", async (req, res) => {
  try {
    const staff = await Employee.findAll({
      where: { employee_type: 'staff' },
      include: [
        {
          model: Department,
          attributes: ['id', 'department_name', 'department_code']
        },
        {
          model: Position,
          attributes: ['id', 'position_name', 'position_code', 'level']
        }
      ],
      order: [['created_at', 'DESC']]
    });
    res.json(staff);
  } catch (error) {
    handleError(res, error, "Không thể tải danh sách nhân viên hành chính");
  }
});

app.get("/api/employees/:id", async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id, {
      include: [
        {
          model: Department,
          attributes: ['id', 'department_name', 'department_code']
        },
        {
          model: Position,
          attributes: ['id', 'position_name', 'position_code', 'level']
        }
      ]
    });
    if (!employee) {
      return res.status(404).json({ error: "Không tìm thấy nhân viên" });
    }
    res.json(employee);
  } catch (error) {
    handleError(res, error, "Không thể tải thông tin nhân viên");
  }
});

app.post("/api/employees", async (req, res) => {
  try {
    const {
      employee_code, first_name, last_name, email, phone, address,
      date_of_birth, gender, employee_type = 'staff', id_card,
      position_id, department_id, manager_id, hire_date, salary,
      status = 'Active'
    } = req.body;    

    if (!employee_code || !first_name || !last_name || !email || !position_id || !department_id || !hire_date) {
      return res.status(400).json({
        error: "Mã nhân viên, họ tên, email, chức vụ, phòng ban và ngày tuyển dụng là bắt buộc"
      });
    }

    // Convert empty strings to null for optional fields
    const cleanManagerId = manager_id === '' ? null : manager_id;
    const cleanIdCard = id_card === '' ? null : id_card;
    const cleanAddress = address === '' ? null : address;
    const cleanPhone = phone === '' ? null : phone;

    const employee = await Employee.create({
      employee_code,
      first_name,
      last_name,
      email,
      phone: cleanPhone,
      address: cleanAddress,
      date_of_birth,
      gender,
      employee_type,
      id_card: cleanIdCard,
      position_id,
      department_id,
      manager_id: cleanManagerId,
      hire_date,
      salary,
      status
    });

    res.status(201).json(employee);
  } catch (error) {
    handleError(res, error, "Không thể thêm nhân viên");
  }
});

app.put("/api/employees/:id", async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    if (!employee) {
      return res.status(404).json({ error: "Không tìm thấy nhân viên" });
    }

    // Convert empty strings to null for optional fields
    const updateData = { ...req.body };
    if (updateData.manager_id === '') {
      updateData.manager_id = null;
    }
    if (updateData.id_card === '') {
      updateData.id_card = null;
    }
    if (updateData.address === '') {
      updateData.address = null;
    }
    if (updateData.phone === '') {
      updateData.phone = null;
    }

    await employee.update(updateData);
    res.json(employee);
  } catch (error) {
    handleError(res, error, "Không thể cập nhật nhân viên");
  }
});

app.delete("/api/employees/:id", async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    if (!employee) {
      return res.status(404).json({ error: "Không tìm thấy nhân viên" });
    }

    await employee.destroy();
    res.json({ message: "Xóa nhân viên thành công" });
  } catch (error) {
    handleError(res, error, "Không thể xóa nhân viên");
  }
});

// ---- Users API (Compatibility endpoint for frontend) ----
// GET /api/users?role=lecturer hoặc ?role=staff
app.get("/api/users", async (req, res) => {
  try {
    const { role } = req.query; // role = 'lecturer' hoặc 'staff'

    const where = {};
    if (role && ['lecturer', 'staff'].includes(role)) {
      where.employee_type = role;
    }

    const employees = await Employee.findAll({
      where,
      include: [
        {
          model: Department,
          attributes: ['id', 'department_name', 'department_code']
        },
        {
          model: Position,
          attributes: ['id', 'position_name', 'position_code', 'level']
        }
      ],
      order: [['created_at', 'DESC']]
    });
    
    // Map response to include full_name for frontend compatibility
    const mappedEmployees = employees.map(emp => {
      const empData = emp.toJSON();
      return {
        ...empData,
        full_name: `${empData.first_name || ''} ${empData.last_name || ''}`.trim(),
        user_id: empData.employee_code,
        role: empData.employee_type,
        organization_unit_id: empData.department_id,
        active: empData.status === 'Active' ? 'Đang làm việc' : 'Nghỉ việc',
        degree: empData.degree || null,
        degrees: empData.degree ? String(empData.degree).split(',').map(s => s.trim()).filter(Boolean) : [],
        position: empData.Position?.position_name || null,
        OrganizationUnit: empData.Department ? { id: empData.Department.id, name: empData.Department.department_name } : null
      };
    });
    
    res.json(mappedEmployees);
  } catch (error) {
    handleError(res, error, "Không thể tải danh sách người dùng");
  }
});

// GET /api/users/:id
app.get("/api/users/:id", async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id, {
      include: [
        {
          model: Department,
          attributes: ['id', 'department_name', 'department_code']
        },
        {
          model: Position,
          attributes: ['id', 'position_name', 'position_code', 'level']
        }
      ]
    });
    if (!employee) {
      return res.status(404).json({ error: "Không tìm thấy người dùng" });
    }
    
    // Map response for frontend compatibility
    const empData = employee.toJSON();
    const mappedEmployee = {
      ...empData,
      full_name: `${empData.first_name || ''} ${empData.last_name || ''}`.trim(),
      user_id: empData.employee_code,
      role: empData.employee_type,
      organization_unit_id: empData.department_id,
      active: empData.status === 'Active' ? 'Đang làm việc' : 'Nghỉ việc',
      degree: empData.degree || null,
      degrees: empData.degree ? String(empData.degree).split(',').map(s => s.trim()).filter(Boolean) : [],
      position: empData.Position?.position_name || null,
      OrganizationUnit: empData.Department ? { id: empData.Department.id, name: empData.Department.department_name } : null
    };
    
    res.json(mappedEmployee);
  } catch (error) {
    handleError(res, error, "Không thể tải thông tin người dùng");
  }
});

// POST /api/users
app.post("/api/users", async (req, res) => {
  try {
    // Map role to employee_type and user_id to employee_code
    const {
      user_id, // Frontend uses user_id, backend uses employee_code
      full_name, // Frontend uses full_name, backend uses first_name + last_name
      role, // Frontend uses role, backend uses employee_type
      gender, degree, position, organization_unit_id, email, phone, address, active,
      // Also accept backend fields directly
      employee_code, first_name, last_name, employee_type,
      position_id, department_id, manager_id, hire_date, salary, status
    } = req.body;

    // Convert frontend format to backend format
    let employeeData = {};
    if (user_id || employee_code) {
      employeeData.employee_code = employee_code || user_id;
    }
    if (full_name) {
      // Split full_name into first_name and last_name
      const nameParts = full_name.trim().split(/\s+/);
      employeeData.first_name = nameParts.slice(0, -1).join(' ') || full_name;
      employeeData.last_name = nameParts[nameParts.length - 1] || '';
    } else {
      employeeData.first_name = first_name;
      employeeData.last_name = last_name;
    }
    
    employeeData.employee_type = employee_type || (role === 'lecturer' ? 'lecturer' : 'staff');
    employeeData.email = email;
    employeeData.phone = phone;
    employeeData.address = address;
    employeeData.gender = gender || 'Other';
    if (Array.isArray(degree)) {
      // store as comma-separated string for compatibility
      employeeData.degree = degree.join(', ');
    } else if (degree !== undefined) {
      employeeData.degree = degree;
    }
    employeeData.position_id = position_id || position;
    employeeData.department_id = department_id || organization_unit_id;
    employeeData.manager_id = manager_id;
    employeeData.hire_date = hire_date || new Date().toISOString().split('T')[0];
    employeeData.salary = salary;
    employeeData.status = status || (active === 'Đang làm việc' ? 'Active' : 'Inactive');

    if (!employeeData.position_id) {
      let fallbackDepartmentId = employeeData.department_id;
      if (!fallbackDepartmentId) {
        fallbackDepartmentId = await Department.min('id');
      }
      if (!fallbackDepartmentId) {
        return res.status(400).json({ error: "Vui lòng chọn phòng ban trước khi tạo giảng viên" });
      }
      let defaultPosition = await Position.findOne({ where: { position_code: 'LECTURER_DEFAULT' } });
      if (!defaultPosition) {
        defaultPosition = await Position.create({
          position_code: 'LECTURER_DEFAULT',
          position_name: 'Giảng viên',
          level: 1,
          description: 'Vị trí mặc định cho giảng viên',
          department_id: fallbackDepartmentId,
          is_active: true,
        });
      }
      employeeData.position_id = defaultPosition.id;
      if (!employeeData.department_id && defaultPosition.department_id) {
        employeeData.department_id = defaultPosition.department_id;
      }
    }

    if (!employeeData.employee_code || !employeeData.first_name || !employeeData.last_name || 
        !employeeData.email || !employeeData.position_id || !employeeData.department_id) {
      return res.status(400).json({
        error: "Mã nhân viên, họ tên, email, chức vụ và phòng ban là bắt buộc"
      });
    }

    const employee = await Employee.create(employeeData);
    
    // Reload with associations
    const newEmployee = await Employee.findByPk(employee.id, {
      include: [
        {
          model: Department,
          attributes: ['id', 'department_name', 'department_code']
        },
        {
          model: Position,
          attributes: ['id', 'position_name', 'position_code', 'level']
        }
      ]
    });
    
    // Map response for frontend compatibility
    const empData = newEmployee.toJSON();
    const mappedEmployee = {
      ...empData,
      full_name: `${empData.first_name || ''} ${empData.last_name || ''}`.trim(),
      user_id: empData.employee_code,
      role: empData.employee_type,
      organization_unit_id: empData.department_id,
      active: empData.status === 'Active' ? 'Đang làm việc' : 'Nghỉ việc',
      degree: empData.degree || null,
      degrees: empData.degree ? String(empData.degree).split(',').map(s => s.trim()).filter(Boolean) : [],
      position: empData.Position?.position_name || null,
      OrganizationUnit: empData.Department ? { id: empData.Department.id, name: empData.Department.department_name } : null
    };
    
    res.status(201).json(mappedEmployee);
  } catch (error) {
    handleError(res, error, "Không thể thêm người dùng");
  }
});

// PUT /api/users/:id
app.put("/api/users/:id", async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    if (!employee) {
      return res.status(404).json({ error: "Không tìm thấy người dùng" });
    }

    console.log('[PUT /api/users/:id] payload:', req.body);

    // Map frontend format to backend format
    const {
      user_id, full_name, role, gender, degree, position, organization_unit_id,
      email, phone, address, active,
      // Also accept backend fields directly
      employee_code, first_name, last_name, employee_type,
      position_id, department_id, manager_id, hire_date, salary, status
    } = req.body;

    const updateData = {};
    if (user_id !== undefined) updateData.employee_code = user_id;
    if (employee_code !== undefined) updateData.employee_code = employee_code;
    if (full_name) {
      const nameParts = full_name.trim().split(/\s+/);
      updateData.first_name = nameParts.slice(0, -1).join(' ') || full_name;
      updateData.last_name = nameParts[nameParts.length - 1] || '';
    } else {
      if (first_name !== undefined) updateData.first_name = first_name;
      if (last_name !== undefined) updateData.last_name = last_name;
    }
    if (role !== undefined) updateData.employee_type = role === 'lecturer' ? 'lecturer' : 'staff';
    if (employee_type !== undefined) updateData.employee_type = employee_type;
    if (email !== undefined) updateData.email = email;
    if (phone !== undefined) updateData.phone = phone === '' ? null : phone;
    if (address !== undefined) updateData.address = address === '' ? null : address;
    if (gender !== undefined) updateData.gender = gender;
    if (degree !== undefined) {
      if (Array.isArray(degree)) {
        updateData.degree = degree.length ? degree.join(', ') : null;
      } else {
        updateData.degree = degree === '' ? null : degree;
      }
    }

    // Position mapping: skip if empty string to avoid FK errors
    if (position_id !== undefined) updateData.position_id = position_id;
    if (position !== undefined && position !== '') updateData.position_id = position;

    // Department mapping: skip if empty string to avoid FK errors
    if (department_id !== undefined && department_id !== '') updateData.department_id = department_id;
    if (organization_unit_id !== undefined && organization_unit_id !== '') updateData.department_id = organization_unit_id;

    if (manager_id !== undefined) updateData.manager_id = manager_id === '' ? null : manager_id;
    if (hire_date !== undefined) updateData.hire_date = hire_date;
    if (salary !== undefined) updateData.salary = salary;
    if (status !== undefined) updateData.status = status;
    if (active !== undefined) updateData.status = active === 'Đang làm việc' ? 'Active' : 'Inactive';

    await employee.update(updateData);
    
    // Reload with associations
    const updatedEmployee = await Employee.findByPk(req.params.id, {
      include: [
        {
          model: Department,
          attributes: ['id', 'department_name', 'department_code']
        },
        {
          model: Position,
          attributes: ['id', 'position_name', 'position_code', 'level']
        }
      ]
    });
    
    // Map response for frontend compatibility
    const empData = updatedEmployee.toJSON();
    const mappedEmployee = {
      ...empData,
      full_name: `${empData.first_name || ''} ${empData.last_name || ''}`.trim(),
      user_id: empData.employee_code,
      role: empData.employee_type,
      organization_unit_id: empData.department_id,
      active: empData.status === 'Active' ? 'Đang làm việc' : 'Nghỉ việc',
      degree: empData.degree || null,
      degrees: empData.degree ? String(empData.degree).split(',').map(s => s.trim()).filter(Boolean) : [],
      position: empData.Position?.position_name || null,
      OrganizationUnit: empData.Department ? { id: empData.Department.id, name: empData.Department.department_name } : null
    };
    
    res.json(mappedEmployee);
  } catch (error) {
    handleError(res, error, "Không thể cập nhật người dùng");
  }
});

// DELETE /api/users/:id
app.delete("/api/users/:id", async (req, res) => {
  try {
    const employee = await Employee.findByPk(req.params.id);
    if (!employee) {
      return res.status(404).json({ error: "Không tìm thấy người dùng" });
    }

    await employee.destroy();
    res.json({ message: "Xóa người dùng thành công" });
  } catch (error) {
    handleError(res, error, "Không thể xóa người dùng");
  }
});

// ---- Curriculum Structure ----
app.get("/api/curriculum-structure", async (req, res) => {
  try {
    const structures = await CurriculumStructure.findAll({
      include: [
        { model: Major, as: 'Major', attributes: ['id', 'major_name', 'major_code'] },
        { model: KnowledgeBlock, as: 'KnowledgeBlock', attributes: ['id', 'block_name', 'block_code'] },
        { model: Program, as: 'Program', attributes: ['id', 'program_name', 'program_code'] }
      ],
      order: [['program_id', 'ASC'], ['major_id', 'ASC'], ['semester', 'ASC']]
    });
    res.json(structures);
  } catch (error) {
    handleError(res, error, "Không thể tải cấu trúc CTĐT");
  }
});

app.post("/api/curriculum-structure", async (req, res) => {
  try {
    const { program_id, major_id, knowledge_block_id, semester, is_required = true, min_credits = 0, notes } = req.body;
    if (!program_id || !major_id || !knowledge_block_id) {
      return res.status(400).json({ error: "Chương trình đào tạo, ngành học và khối kiến thức là bắt buộc" });
    }
    const structure = await CurriculumStructure.create({
      program_id,
      major_id,
      knowledge_block_id,
      semester,
      is_required,
      min_credits,
      notes: notes || null
    });
    res.status(201).json(structure);
  } catch (error) {
    handleError(res, error, "Không thể thêm cấu trúc");
  }
});

app.put("/api/curriculum-structure/:id", async (req, res) => {
  try {
    const structure = await CurriculumStructure.findByPk(req.params.id);
    if (!structure) return res.status(404).json({ error: "Không tìm thấy cấu trúc" });
    await structure.update(req.body);
    res.json(structure);
  } catch (error) {
    handleError(res, error, "Không thể cập nhật cấu trúc");
  }
});

app.delete("/api/curriculum-structure/:id", async (req, res) => {
  try {
    const structure = await CurriculumStructure.findByPk(req.params.id);
    if (!structure) return res.status(404).json({ error: "Không tìm thấy cấu trúc" });
    await structure.destroy();
    res.json({ message: "Xóa thành công" });
  } catch (error) {
    handleError(res, error, "Không thể xóa cấu trúc");
  }
});

// ---- Knowledge Blocks ----
app.get("/api/knowledge-blocks", async (req, res) => {
  try {
    const blocks = await KnowledgeBlock.findAll({
      include: [{ model: Major, as: 'Major', attributes: ['id', 'major_name', 'major_code'] }],
      order: [['created_at', 'DESC']]
    });
    res.json(blocks);
  } catch (error) {
    handleError(res, error, "Không thể tải danh sách khối kiến thức");
  }
});

app.post("/api/knowledge-blocks", async (req, res) => {
  try {
    const { block_code, block_name, description, total_credits = 0, is_required = true, major_id, is_active = true } = req.body;
    if (!block_code || !block_name) {
      return res.status(400).json({ error: "Mã khối và tên khối là bắt buộc" });
    }
    const block = await KnowledgeBlock.create({
      block_code, block_name, description: description || null,
      total_credits, is_required, major_id: major_id || null, is_active
    });
    res.status(201).json(block);
  } catch (error) {
    handleError(res, error, "Không thể thêm khối kiến thức");
  }
});

app.put("/api/knowledge-blocks/:id", async (req, res) => {
  try {
    const block = await KnowledgeBlock.findByPk(req.params.id);
    if (!block) return res.status(404).json({ error: "Không tìm thấy khối kiến thức" });
    const updateData = { ...req.body };
    // sanitize optional fields that may come as empty string from frontend
    if (updateData.description === '') updateData.description = null;
    if (updateData.major_id === '' || updateData.major_id === undefined) updateData.major_id = null;
    await block.update(updateData);
    res.json(block);
  } catch (error) {
    handleError(res, error, "Không thể cập nhật khối kiến thức");
  }
});

app.delete("/api/knowledge-blocks/:id", async (req, res) => {
  try {
    const block = await KnowledgeBlock.findByPk(req.params.id);
    if (!block) return res.status(404).json({ error: "Không tìm thấy khối kiến thức" });

    await sequelize.transaction(async (transaction) => {
      // Remove from many-to-many relation with programs (ensure join rows are gone)
      try {
        await block.setPrograms([], { transaction });
      } catch (e) {
        // Fallback: hard delete join rows if association alias mismatch
        await sequelize.query(
          "DELETE FROM program_knowledge_blocks WHERE knowledge_block_id = ?",
          { replacements: [block.id], transaction }
        );
      }

      // Remove curriculum structure rows referencing this knowledge block (cannot be NULL due to NOT NULL constraint)
      await CurriculumStructure.destroy({
        where: { knowledge_block_id: block.id },
        transaction
      });

      // Nullify in courses
      await Course.update(
        { knowledge_block_id: null },
        { where: { knowledge_block_id: block.id }, transaction }
      );

      await block.destroy({ transaction });
    });

    res.json({ message: "Xóa khối kiến thức thành công" });
  } catch (error) {
    handleError(res, error, "Không thể xóa khối kiến thức");
  }
});

// ---- Majors ----
app.get("/api/majors", async (req, res) => {
  try {
    const majors = await Major.findAll({
      include: [
        {
          model: Department,
          as: 'Department',
          attributes: ['id', 'department_name', 'department_code']
        },
        {
          model: Employee,
          as: 'HeadOfMajor',
          attributes: ['id', 'first_name', 'last_name', 'email']
        }
      ],
      order: [['created_at', 'DESC']]
    });
    res.json(majors);
  } catch (error) {
    handleError(res, error, "Không thể tải danh sách ngành học");
  }
});

app.get("/api/majors/:id", async (req, res) => {
  try {
    const major = await Major.findByPk(req.params.id, {
      include: [
        {
          model: Department,
          as: 'Department',
          attributes: ['id', 'department_name', 'department_code']
        },
        {
          model: Employee,
          as: 'HeadOfMajor',
          attributes: ['id', 'first_name', 'last_name', 'email']
        }
      ]
    });
    if (!major) {
      return res.status(404).json({ error: "Không tìm thấy ngành học" });
    }
    res.json(major);
  } catch (error) {
    handleError(res, error, "Không thể tải thông tin ngành học");
  }
});

app.post("/api/majors", async (req, res) => {
  try {
    const {
      major_code, major_name, description, degree_type = 'bachelor',
      duration_years = 4, total_credits = 120, department_id,
      head_of_major_id, is_active = true
    } = req.body;

    if (!major_code || !major_name) {
      return res.status(400).json({
        error: "Mã ngành học và tên ngành học là bắt buộc"
      });
    }

    // Convert empty strings to null for optional fields
    const cleanDepartmentId = department_id === '' ? null : department_id;
    const cleanHeadOfMajorId = head_of_major_id === '' ? null : head_of_major_id;
    const cleanDescription = description === '' ? null : description;

    const major = await Major.create({
      major_code,
      major_name,
      description: cleanDescription,
      degree_type,
      duration_years,
      total_credits,
      department_id: cleanDepartmentId,
      head_of_major_id: cleanHeadOfMajorId,
      is_active
    });

    res.status(201).json(major);
  } catch (error) {
    handleError(res, error, "Không thể thêm ngành học");
  }
});

app.put("/api/majors/:id", async (req, res) => {
  try {
    const major = await Major.findByPk(req.params.id);
    if (!major) {
      return res.status(404).json({ error: "Không tìm thấy ngành học" });
    }

    // Convert empty strings to null for optional fields
    const updateData = { ...req.body };
    if (updateData.department_id === '') {
      updateData.department_id = null;
    }
    if (updateData.head_of_major_id === '') {
      updateData.head_of_major_id = null;
    }
    if (updateData.description === '') {
      updateData.description = null;
    }

    await major.update(updateData);
    res.json(major);
  } catch (error) {
    handleError(res, error, "Không thể cập nhật ngành học");
  }
});

app.delete("/api/majors/:id", async (req, res) => {
  try {
    const major = await Major.findByPk(req.params.id);
    if (!major) {
      return res.status(404).json({ error: "Không tìm thấy ngành học" });
    }

    await major.destroy();
    res.json({ message: "Xóa ngành học thành công" });
  } catch (error) {
    handleError(res, error, "Không thể xóa ngành học");
  }
});

// ---- Programs ----
app.get("/api/programs", async (req, res) => {
  try {
    const programs = await Program.findAll({
      include: [
        {
          model: KnowledgeBlock,
          through: { attributes: [] },
          attributes: ["id", "block_code", "block_name", "total_credits", "is_required", "is_active"],
        },
        {
          model: Course,
          as: "Courses",
          attributes: ["id", "course_code", "course_name", "total_credits", "knowledge_block_id", "is_active"],
          through: { attributes: ["id", "semester", "notes"] },
        },
      ],
      order: [["created_at", "DESC"]],
    });
    // Ensure total_credits is not undefined in response (normalize to null if missing)
    const normalized = programs.map(p => {
      const json = p.toJSON();
      if (typeof json.total_credits === 'undefined') json.total_credits = null;
      return json;
    });
    res.json(normalized);
  } catch (error) {
    handleError(res, error, "Không thể tải danh sách chương trình");
  }
});

app.get("/api/programs/:id", async (req, res) => {
  try {
    const program = await Program.findByPk(req.params.id, {
      include: [
        {
          model: KnowledgeBlock,
          through: { attributes: [] },
          attributes: ["id", "block_code", "block_name", "total_credits", "is_required", "is_active"],
        },
        {
          model: Course,
          as: "Courses",
          attributes: ["id", "course_code", "course_name", "total_credits", "knowledge_block_id", "is_active"],
          through: { attributes: ["id", "semester", "notes"] },
        },
      ],
    });
    if (!program) {
      return res.status(404).json({ error: "Không tìm thấy chương trình" });
    }
    const json = program.toJSON();
    if (typeof json.total_credits === 'undefined') json.total_credits = null;
    res.json(json);
  } catch (error) {
    handleError(res, error, "Không thể tải thông tin chương trình");
  }
});

app.post("/api/programs", async (req, res) => {
  try {
    const {
      program_code,
      program_name,
      description,
      start_date,
      end_date,
      is_active = true,
      knowledge_block_ids,
      course_ids,
      total_credits
    } = req.body;

    if (!program_code || !program_name) {
      return res.status(400).json({ error: "Mã chương trình và tên chương trình là bắt buộc" });
    }

    const normalizedTotalCredits =
      total_credits === undefined || total_credits === null || total_credits === ''
        ? null
        : Number(total_credits);

    if (
      normalizedTotalCredits !== null &&
      (!Number.isInteger(normalizedTotalCredits) || normalizedTotalCredits < 0)
    ) {
      return res.status(400).json({ error: "Số tín chỉ phải là số nguyên không âm" });
    }

    let program = await Program.create({
      program_code,
      program_name,
      description: description === '' ? null : description,
      start_date: start_date === '' ? null : start_date,
      end_date: end_date === '' ? null : end_date,
      is_active,
      total_credits: normalizedTotalCredits
    });

    // Link knowledge blocks if provided
    if (Array.isArray(knowledge_block_ids) && knowledge_block_ids.length > 0) {
      await program.setKnowledgeBlocks(knowledge_block_ids);
    }

    if (Array.isArray(course_ids)) {
      const normalizedCourseIds = [
        ...new Set(
          course_ids
            .map((id) => Number(id))
            .filter((id) => Number.isInteger(id) && id > 0)
        ),
      ];
      await program.setCourses(normalizedCourseIds);
    }

    // If total_credits not provided, auto-calc from knowledge blocks
    if (normalizedTotalCredits === null) {
      await recalculateProgramTotalCredits(program);
    }

    program = await Program.findByPk(program.id, {
      include: [
        {
          model: KnowledgeBlock,
          through: { attributes: [] },
          attributes: ["id", "block_code", "block_name", "total_credits", "is_required", "is_active"],
        },
        {
          model: Course,
          as: "Courses",
          attributes: ["id", "course_code", "course_name", "total_credits", "knowledge_block_id", "is_active"],
          through: { attributes: ["id", "semester", "notes"] },
        },
      ],
    });

    res.status(201).json(program);
  } catch (error) {
    handleError(res, error, "Không thể thêm chương trình");
  }
});

app.put("/api/programs/:id", async (req, res) => {
  try {
    const program = await Program.findByPk(req.params.id);
    if (!program) {
      return res.status(404).json({ error: "Không tìm thấy chương trình" });
    }

    const updateData = { ...req.body };
    delete updateData.knowledge_block_ids;
    delete updateData.course_ids;

    if ("total_credits" in req.body) {
      const normalizedTotalCredits =
        req.body.total_credits === undefined || req.body.total_credits === null || req.body.total_credits === ''
          ? null
          : Number(req.body.total_credits);

      if (
        normalizedTotalCredits !== null &&
        (!Number.isInteger(normalizedTotalCredits) || normalizedTotalCredits < 0)
      ) {
        return res.status(400).json({ error: "Số tín chỉ phải là số nguyên không âm" });
      }

      updateData.total_credits = normalizedTotalCredits;
    }

    if (updateData.description === '') updateData.description = null;
    if (updateData.start_date === '') updateData.start_date = null;
    if (updateData.end_date === '') updateData.end_date = null;

    await program.update(updateData);

    // Link knowledge blocks if provided
    if (Array.isArray(req.body.knowledge_block_ids)) {
      await program.setKnowledgeBlocks(req.body.knowledge_block_ids);
    }

    if (Array.isArray(req.body.course_ids)) {
      const normalizedCourseIds = [
        ...new Set(
          req.body.course_ids
            .map((id) => Number(id))
            .filter((id) => Number.isInteger(id) && id > 0)
        ),
      ];
      await program.setCourses(normalizedCourseIds);
    }

    // If total_credits was not explicitly provided (or set to null/empty),
    // recalculate based on current knowledge blocks
    const provided = Object.prototype.hasOwnProperty.call(req.body, "total_credits");
    const providedIsNullish = req.body.total_credits === '' || req.body.total_credits === null || req.body.total_credits === undefined;
    if (!provided || providedIsNullish) {
      await recalculateProgramTotalCredits(program);
    }

    await program.reload({
      include: [
        {
          model: KnowledgeBlock,
          through: { attributes: [] },
          attributes: ["id", "block_code", "block_name", "total_credits", "is_required", "is_active"],
        },
        {
          model: Course,
          as: "Courses",
          attributes: ["id", "course_code", "course_name", "total_credits", "knowledge_block_id", "is_active"],
          through: { attributes: ["id", "semester", "notes"] },
        },
      ],
    });

    res.json(program);
  } catch (error) {
    handleError(res, error, "Không thể cập nhật chương trình");
  }
});

app.delete("/api/programs/:id", async (req, res) => {
  try {
    const program = await Program.findByPk(req.params.id);
    if (!program) {
      return res.status(404).json({ error: "Không tìm thấy chương trình" });
    }

    await sequelize.transaction(async (transaction) => {
      // Remove many-to-many relationships
      await program.setKnowledgeBlocks([], { transaction });
      await program.setCourses([], { transaction });

      // Detach curriculum structures referencing this program
      await CurriculumStructure.update(
        { program_id: null },
        {
          where: { program_id: program.id },
          transaction,
          logging: console.log,
        }
      );

      // Detach cohorts referencing this program
      await Cohort.update(
        { program_id: null },
        {
          where: { program_id: program.id },
          transaction,
          logging: console.log,
        }
      );

      await program.destroy({ transaction, logging: console.log });
    });

    res.json({ message: "Xóa chương trình thành công" });
  } catch (error) {
    handleError(res, error, "Không thể xóa chương trình");
  }
});

// ---- Cohorts ----
app.get("/api/cohorts", async (req, res) => {
  try {
    const cohorts = await Cohort.findAll({
      include: [
        {
          model: Program,
          as: 'Program',
          attributes: ['id', 'program_code', 'program_name']
        },
        {
          model: Employee,
          as: 'Instructor',
          attributes: ['id', 'first_name', 'last_name', 'email']
        }
      ],
      order: [['created_at', 'DESC']]
    });
    res.json(cohorts);
  } catch (error) {
    handleError(res, error, "Không thể tải danh sách lớp học");
  }
});

app.get("/api/cohorts/:id", async (req, res) => {
  try {
    const cohort = await Cohort.findByPk(req.params.id, {
      include: [
        {
          model: Program,
          as: 'Program',
          attributes: ['id', 'program_code', 'program_name']
        },
        {
          model: Employee,
          as: 'Instructor',
          attributes: ['id', 'first_name', 'last_name', 'email']
        }
      ]
    });
    if (!cohort) {
      return res.status(404).json({ error: "Không tìm thấy lớp học" });
    }
    res.json(cohort);
  } catch (error) {
    handleError(res, error, "Không thể tải thông tin lớp học");
  }
});

app.post("/api/cohorts", async (req, res) => {
  try {
    const {
      cohort_code, cohort_name, description, start_date, end_date,
      max_students = 30, current_students = 0, status = 'planning',
      program_id, instructor_id
    } = req.body;

    if (!cohort_code || !cohort_name || !start_date) {
      return res.status(400).json({
        error: "Mã lớp học, tên lớp học và ngày bắt đầu là bắt buộc"
      });
    }

    // Convert empty strings to null for optional fields
    const cleanProgramId = program_id === '' ? null : program_id;
    const cleanInstructorId = instructor_id === '' ? null : instructor_id;
    const cleanEndDate = end_date === '' ? null : end_date;
    const cleanDescription = description === '' ? null : description;

    const cohort = await Cohort.create({
      cohort_code,
      cohort_name,
      description: cleanDescription,
      start_date,
      end_date: cleanEndDate,
      max_students,
      current_students,
      status,
      program_id: cleanProgramId,
      instructor_id: cleanInstructorId
    });

    res.status(201).json(cohort);
  } catch (error) {
    handleError(res, error, "Không thể thêm lớp học");
  }
});

app.put("/api/cohorts/:id", async (req, res) => {
  try {
    const cohort = await Cohort.findByPk(req.params.id);
    if (!cohort) {
      return res.status(404).json({ error: "Không tìm thấy lớp học" });
    }

    // Convert empty strings to null for optional fields
    const updateData = { ...req.body };
    if (updateData.program_id === '') {
      updateData.program_id = null;
    }
    if (updateData.instructor_id === '') {
      updateData.instructor_id = null;
    }
    if (updateData.end_date === '') {
      updateData.end_date = null;
    }
    if (updateData.description === '') {
      updateData.description = null;
    }

    await cohort.update(updateData);
    res.json(cohort);
  } catch (error) {
    handleError(res, error, "Không thể cập nhật lớp học");
  }
});

app.delete("/api/cohorts/:id", async (req, res) => {
  try {
    const cohort = await Cohort.findByPk(req.params.id);
    if (!cohort) {
      return res.status(404).json({ error: "Không tìm thấy lớp học" });
    }

    await cohort.destroy();
    res.json({ message: "Xóa lớp học thành công" });
  } catch (error) {
    handleError(res, error, "Không thể xóa lớp học");
  }
});

// =======================
// API: Curriculum Viewer (FIXED)
// =======================
app.get("/api/curriculum-viewer/full", async (req, res) => {
  try {
    // Get all programs with their linked knowledge blocks and each block's courses
    const programs = await Program.findAll({
      include: [
        {
          model: KnowledgeBlock,
          through: { attributes: [] }, // hide join table
          attributes: ["id", "block_code", "block_name", "total_credits"],
          include: [
            {
              model: Course,
              as: "Courses",
              attributes: ["id", "course_code", "course_name", "total_credits", "duration_hours", "level"]
            }
          ]
        }
      ],
      order: [["created_at", "DESC"]],
    });
    if (!programs.length) {
      return res.status(404).json({ message: "Không có chương trình đào tạo nào." });
    }
    res.json({
      success: true,
      count: programs.length,
      data: programs,
    });
  } catch (error) {
    console.error("❌ Curriculum Viewer API Error:", error);
    res.status(500).json({ message: "Không thể tải dữ liệu hiển thị CTĐT", error: error.message });
  }
});

// ---- Dashboard ----
app.get("/api/dashboard/stats", async (req, res) => {
  try {
    const [
      totalEmployees, totalDepartments, totalCourses, totalEnrollments,
      totalMajors, totalCohorts, totalKnowledgeBlocks, totalPositions,
      activeEmployees, activeCohorts, completedCohorts
    ] = await Promise.all([
      safeCount(Employee),
      safeCount(Department),
      safeCount(Course),
      safeCount(Enrollment),
      safeCount(Major),
      safeCount(Cohort),
      safeCount(KnowledgeBlock),
      safeCount(Position),
      safeCount(Employee, { where: { status: 'Active' } }),
      safeCount(Cohort, { where: { status: 'active' } }),
      safeCount(Cohort, { where: { status: 'completed' } })
    ]);

    res.json({
      totalEmployees,
      totalDepartments,
      totalCourses,
      totalEnrollments,
      totalMajors,
      totalCohorts,
      totalKnowledgeBlocks,
      totalPositions,
      activeEmployees,
      activeCohorts,
      completedCohorts
    });
  } catch (error) {
    handleError(res, error, "Không thể tải thống kê dashboard");
  }
});

// =======================
// Initialize and start server
// =======================
async function initializeServer() {
  console.log("[SERVER] Initializing server...");
  const isConnected = await testConnection();
  if (!isConnected) {
    console.error("❌ [SERVER] Cannot start server due to database connection failure");
    process.exit(1);
  }

  try {
    // Clean up legacy data that might violate new validations/foreign keys
    try {
      console.log("[DB] Performing pre-sync data cleanup for curriculum structures...");
      await sequelize.query("DROP TABLE IF EXISTS departments_backup");
      await sequelize.query(`
        DELETE FROM curriculum_structures
        WHERE program_id IS NOT NULL
          AND (
            TRIM(CAST(program_id AS TEXT)) = ''
            OR program_id NOT IN (SELECT id FROM programs)
          )
      `);
      await sequelize.query(`
        DELETE FROM curriculum_structures
        WHERE major_id NOT IN (SELECT id FROM majors)
           OR knowledge_block_id NOT IN (SELECT id FROM knowledge_blocks)
      `);
      console.log("✅ [DB] Pre-sync cleanup completed");
    } catch (cleanupError) {
      console.warn("⚠️ [DB] Pre-sync cleanup skipped:", cleanupError.message);
    }

    console.log("[DB] Syncing database tables (with alter)...");
    await applyDatabasePatches();
    await sequelize.sync(); // Đồng bộ cấu trúc bảng với model mới
    console.log("✅ [DB] Database tables synced successfully");

    await loadSampleData();
    await backfillAllProgramsTotalCredits();

    app.listen(PORT, () => {
      const timestamp = new Date().toISOString();
      console.log(`[${timestamp}] 🚀 Server started successfully at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ [SERVER] Server startup failed:", error.message);
    if (error && Array.isArray(error.errors)) {
      console.error("🔍 [SERVER] Validation details:", error.errors.map(e => ({
        message: e.message,
        path: e.path,
        value: e.value
      })));
    } else if (error?.parent?.message) {
      console.error("🔍 [SERVER] Parent error:", error.parent.message);
    }
    process.exit(1);
  }
}

// ---- Tuition Calculator ----
app.get("/api/tuition/:id", async (req, res) => {
  try {
    const programId = req.params.id;
    const priceParam = req.query.price_per_credit ?? req.query.pricePerCredit;

    if (priceParam === undefined || priceParam === null || priceParam === '') {
      return res.status(400).json({ error: "Vui lòng cung cấp giá tín chỉ (price_per_credit)" });
    }

    const pricePerCredit = Number(priceParam);
    if (!Number.isFinite(pricePerCredit) || pricePerCredit <= 0) {
      return res.status(400).json({ error: "Giá tín chỉ phải là số dương" });
    }
    
    // Lấy chương trình với knowledge blocks và courses
    const program = await Program.findByPk(programId, {
      include: [
        {
          model: KnowledgeBlock,
          through: { attributes: [] }, // hide join table
          attributes: ["id", "block_code", "block_name", "total_credits"],
          include: [
            {
              model: Course,
              as: "Courses",
              attributes: ["id", "course_code", "course_name", "total_credits"],
              where: { is_active: true },
              required: false
            }
          ]
        }
      ]
    });

    if (!program) {
      return res.status(404).json({ error: "Không tìm thấy chương trình đào tạo" });
    }

    // Tính học phí
    let tongHocPhi = 0;
    const chiTiet = [];

    const programData = program.toJSON();
    
    if (programData.KnowledgeBlocks) {
      programData.KnowledgeBlocks.forEach(block => {
        if (block.Courses && block.Courses.length > 0) {
          block.Courses.forEach(course => {
            const credits = Number(course.total_credits) || 0;
            const hocPhi = credits * pricePerCredit;

            tongHocPhi += hocPhi;

            chiTiet.push({
              id: course.id,
              ten_hoc_phan: course.course_name,
              ma_hoc_phan: course.course_code,
              so_tin_chi: credits,
              gia_tin_chi: pricePerCredit,
              hoc_phi: hocPhi,
              khoi_kien_thuc: block.block_name
            });
          });
        }
      });
    }

    const tongSoTinChi = chiTiet.reduce((sum, item) => sum + item.so_tin_chi, 0);

    res.json({
      program_id: program.id,
      program_code: program.program_code,
      program_name: program.program_name,
      price_per_credit: pricePerCredit,
      tongHocPhi,
      tongSoTinChi,
      chiTiet
    });
  } catch (error) {
    handleError(res, error, "Không thể tính học phí");
  }
});

initializeServer();