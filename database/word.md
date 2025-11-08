ĐẠI HỌC PHENIKAA
TRƯỜNG CÔNG NGHỆ THÔNG TIN PHENIKAA
HỌC PHẦN: YÊU CẦU PHẦN MỀM
ĐỀ TÀI: PHÁT TRIỂN PHẦN MỀM QUẢN LÝ CHƯƠNG TRÌNH ĐÀO TẠO
TÀI LIỆU: ĐẶC TẢ YÊU CẦU PHẦN MỀM
Giảng viên hướng dẫn: TS. Mai Thuý Nga
Lớp tín chỉ: Yêu cầu phần mềm-1-1-25(N02)
Nhóm 7 – Lớp: KTPM(EL_2)
1. Nguyễn Tiến Lực MSV: 23010862
2. Lê Thị Kiều Trang MSV: 23010502
3. Quách Hữu Nam MSV: 23012358
4. Nguyễn Minh Sang MSV: 23010888
5. Nguyễn Đức Trường MSV: 23010767
Hà Nội, tháng 10 năm 2025
2
MỤC LỤC
1. GIỚI THIỆU..................................................................................................................... 4
1.1. Mục đích của tài liệu ................................................................................................. 4
1.2. Quy ước của tài liệu.................................................................................................... 4
1.3. Phạm vi của dự án ...................................................................................................... 5
Đặc điểm chính ................................................................................................................. 6
2. MÔ TẢ TỔNG QUAN...................................................................................................... 6
2.1 Bối cảnh ...................................................................................................................... 6
2.2. Các loại người dùng và các đặc điểm của họ............................................................... 7
2.3. Môi trường hoạt động................................................................................................. 9
2.4. Các ràng buộc thiết kế và cài đặt............................................................................... 10
2.5. Các giải thiết và sự phụ thuộc nghiệp vụ................................................................... 11
3. CÁC THUẬT NGỮ ........................................................................................................ 13
4. ĐẶC TẢ USE CASE (YÊU CẦU CHỨC NĂNG).......................................................... 14
4.1. Danh sách các use case ............................................................................................. 14
4.2. Đặc tả và xây dựng giao diện nhóm UC1 – Quản lý cơ cấu tổ chức .......................... 14
4.3. Đặc tả và xây dựng giao diện nhóm UC2 – Quản lý người dùng/ nhân sự. ................ 26
4.4. Đặc tả và xây dựng giao diện nhóm UC3 – Quản lý học phần................................... 39
4.5. Đặc tả và xây dựng giao diện nhóm UC4 – Quản lý khối kiến thức........................... 50
4.6. Đặc tả và xây dựng giao diện nhóm UC5 – Xây dựng chương trình đào tạo.............. 61
4.7. Đặc tả và xây dựng giao diện nhóm UC6 – Quản lý cấu trúc chương trình đào tạo.... 74
4.9. Đặc tả và xây dựng giao diện nhóm UC7 - Thiết lập đơn vị học phí.......................... 84
4.10. Đặc tả và xây dựng giao diện nhóm UC8 – Tính toán học phí................................. 88
5. YÊU CẦU CHỨC NĂNG............................................................................................... 94
5.1. Phân tích dữ liệu cho từng nhóm chức năng.............................................................. 94
5.2. Mô hình dữ liệu cho cả hệ thống............................................................................... 96
6. CÁC THUỘC TÍNH CHẤT LƯỢNG (YÊU CẦU PHI CHỨC NĂNG).......................... 97
6.1. Tính khả dụng (Usability)......................................................................................... 97
6.2. Hiệu năng (Performance).......................................................................................... 98
6.3. An toàn bảo mật (Security)....................................................................................... 98
6.4. Tính an toàn (Reliability & Safety)........................................................................... 99
7. YÊU CẦU ĐỊA PHƯƠNG HÓA VÀ QUỐC TẾ HÓA................................................... 99
7.1. Địa phương hóa (Localization) ................................................................................. 99
3
7.2. Quốc tế hóa (Internationalization - i18n)................................................................. 100
8. CÁC YÊU CẦU KHÁC................................................................................................ 100
8.1. Yêu cầu về triển khai hệ thống................................................................................ 100
8.2. Yêu cầu về tích hợp hệ thống.................................................................................. 101
8.3. Yêu cầu về bảo trì và nâng cấp ............................................................................... 101
8.4. Yêu cầu về đào tạo và hỗ trợ người dùng ................................................................ 102
8.5. Yêu cầu về sao lưu và khôi phục dữ liệu................................................................. 102
8.6. Yêu cầu về mở rộng và nâng cấp tương lai ............................................................. 102
9. KẾT LUẬN .................................................................................................................. 103
TÀI LIỆU THAM KHẢO................................................................................................. 104
4
DỰ ÁN: HỆ THỐNG QUẢN LÝ
1. GIỚI THIỆU
1.1. Mục đích của tài liệu
Dự án: Hệ thống quản lý được xây dựng nhằm mô tả các yêu cầu nghiệp vụ, phạm vi
và chức năng chính của Hệ thống quản lý chương trình đào tạo.
- Làm cơ sở cho việc phân tích, thiết kế và phát triển phần mềm;
- Giúp các bên liên quan (ban giám hiệu, phòng đào tạo, khoa, giảng viên) hiểu rõ yêu cầu,
quy trình và mục tiêu của hệ thống;
- Đảm bảo tính thống nhất giữa người dùng, nhà phân tích và nhóm phát triển trong suốt quá
trình thực hiện dự án.
1.2. Quy ước của tài liệu
 Quy ước về thuật ngữ và viết tắt
Viết tắt Diễn giải Ghi chú
UC Use case Tình huống sử dụng
CTĐT Chương trình đào tạo Tập hợp các học phần trong một ngành học
HP Học phần Đơn vị kiến thức có trong chương trình đào
tạo
 Quy ước mô tả Use Case
Mỗi Use Case (UC) trong tài liệu được trình bày theo định dạng thống nhất nhằm đảm
bảo tính nhất quán và dễ theo dõi.
Cấu trúc mô tả của mỗi Use Case bao gồm các phần sau:
- Tên Use Case (Use Case Name)
+ Diễn tả chức năng nghiệp vụ chính mà hệ thống cần thực hiện.
+ Được mã hóa theo định dạng UCx, trong đó x là số thứ tự (ví dụ: UC1, UC2, …).
- Mô tả tổng quan (Overview Description)
+ Tóm tắt mục đích, phạm vi và ý nghĩa của Use Case trong hệ thống.
+ Nêu mối liên hệ giữa Use Case với các chức năng hoặc module khác.
- Tác nhân liên quan (Actors)
+ Xác định các đối tượng tương tác với Use Case, bao gồm:
o Tác nhân chính (Primary Actor) – Người hoặc hệ thống khởi phát hành động.
o Tác nhân phụ (Secondary Actor) – Các bên liên quan hoặc hệ thống hỗ trợ.
+ Tiền điều kiện (Preconditions)
o Mô tả trạng thái hoặc điều kiện mà hệ thống phải thoả mãn trước khi Use Case có thể
bắt đầu (ví dụ: người dùng đã đăng nhập, dữ liệu đầu vào hợp lệ).
5
+ Hậu điều kiện (Postconditions)
o Mô tả trạng thái của hệ thống sau khi Use Case kết thúc, bao gồm các thay đổi dữ
liệu, thông báo hoặc kết quả xử lý.
+ Luồng chính (Main Flow)
o Trình bày trình tự các bước xử lý tiêu chuẩn, mô tả luồng hoạt động chính mà tác
nhân thực hiện để đạt được mục tiêu của Use Case.
+ Luồng thay thế (Alternative Flow)
o Mô tả các luồng khác có thể xảy ra nếu người dùng chọn phương án xử lý khác hoặc
điều kiện khác trong quá trình thực hiện.
+ Ngoại lệ (Exceptions)
o Trình bày các tình huống lỗi hoặc bất thường có thể phát sinh trong quá trình thực
hiện Use Case (ví dụ: mất kết nối, dữ liệu không hợp lệ, quyền truy cập bị từ chối)
o Nêu rõ cách hệ thống phản hồi hoặc xử lý khi xảy ra ngoại lệ.
+ Yêu cầu (Requirements)
o Liệt kê các yêu cầu chức năng và phi chức năng liên quan trực tiếp đến Use Case.
+ Bảng dữ liệu sử dụng (Data Objects Used)
o Liệt kê các bảng dữ liệu, thực thể hoặc đối tượng được sử dụng, truy cập hoặc cập
nhật trong Use Case.
o Mỗi bảng dữ liệu được mô tả theo cấu trúc chuẩn DOx – Data Object x (tên, thuộc
tính, kiểu dữ liệu, độ dài, mô tả).
- Mã hóa Use Case theo định dạng UCx, trong đó x là số thứ tự (ví dụ: UC1, UC2,…).
 Quy ước mô tả dữ liệu
- Mỗi đối tượng dữ liệu (Data Object) được mô tả theo mẫu bảng gồm:
+ Mã thuộc tính
+ Tên thuộc tính
+ Kiểu dữ liệu
+ Độ dài
+ Mô tả ý nghĩa
- Các bảng dữ liệu được đánh số DOx (Data Object x) tương ứng với từng Use Case hoặc
nhóm chức năng.
1.3. Phạm vi của dự án
Hệ thống quản lý chương trình đào tạo được phát triển nhằm hỗ trợ các cơ sở giáo dục
(trường đại học, cao đẳng, trung cấp chuyên nghiệp) trong việc:
6
- Quản lý cơ cấu tổ chức và nhân sự (khoa, bộ môn, giảng viên, nhân viên);
- Xây dựng và quản lý chương trình đào tạo (ngành học, học phần, khối kiến thức, đề cương
học phần);
- Quản lý và theo dõi thông tin chương trình đào tạo qua các năm, phục vụ kiểm định chất
lượng và điều chỉnh chương trình khi cần.
Phần mềm hướng đến việc tự động hóa quy trình thủ công hiện nay, giúp giảm sai sót,
tiết kiệm thời gian và nâng cao hiệu quả quản lý đào tạo.
Đặc điểm chính
- Quản lý cơ cấu tổ chức: Đại học → Trường → Khoa/Viện → Bộ môn/Phòng ban.
- Quản lý nhân viên: giảng viên, nghiên cứu viên, cán bộ hành chính, lãnh đạo.
- Phân quyền truy cập theo vai trò (ban giám hiệu, phòng tổ chức, trưởng khoa, nhân viên).
- Quản lý các nghiệp vụ nhân sự: bổ nhiệm, điều động, thay đổi chức vụ, nghỉ việc.
- Hệ thống thống kê, báo cáo theo nhiều tiêu chí: đơn vị, chức danh, trình độ.
- Giao diện trực quan, có thể xuất dữ liệu (Excel/PDF).
2. MÔ TẢ TỔNG QUAN
2.1 Bối cảnh
Trong các trường đại học, đặc biệt là những đại học đa ngành với nhiều trường thành
viên, khoa, viện, bộ môn, việc quản lý cơ cấu tổ chức và nhân sự trở thành một bài toán phức
tạp. Thực tế, nhiều trường vẫn quản lý bằng Excel, văn bản giấy hoặc hoặc các hệ thống riêng
lẻ chưa liên thông, dẫn đến:
- Khó khăn trong việc cập nhật, phân cấp quản lý, và liên kết dữ liệu nhân sự với đơn vị phụ
trách.
- Thông tin thiếu đồng bộ, khó truy xuất.
7
- Hạn chế khả năng phân tích, dự báo và hỗ trợ ra quyết định.
2.2. Các loại người dùng và các đặc điểm của họ
Loại người dùng Vai trò chính Quyền hạn Mức độ truy cập
Quản trị hệ thống Quản lý và duy trì hệ
thống
Toàn quyền Cao nhất
Cán bộ Phòng Đào
tạo
Quản lý chương
trình đào tạo
Tạo, sửa, xóa dữ liệu
đào tạo
Cao
Cán bộ Phòng Tài
chính/ kế toán
Thiết lập và tính học
phí
Cấu hình, báo cáo tài
chính
Trung bình - Cao
Giảng viên Giảng dạy và đề
xuất nội dung
Xem và góp ý học
phần
Trung bình
Sinh viên Xem chương trình
và học phí
Chỉ xem dữ liệu Thấp
Ban giám hiệu Giám sát và phê
duyệt
Xem và phê duyệt Trung bình - Cao
Việc phân loại người dùng rõ ràng giúp đảm bảo hệ thống có phân quyền truy cập hợp
lý, giao diện thân thiện theo vai trò, và tối ưu hiệu quả vận hành trong toàn bộ quy trình quản
lý đào tạo.
 Quản trị hệ thống (System Administrator)
- Mô tả:
Là người chịu trách nhiệm cài đặt, cấu hình, phân quyền, và duy trì hoạt động ổn định của
toàn bộ hệ thống.
- Đặc điểm và quyền hạn:
+ Có quyền cao nhất trong hệ thống.
+ Thực hiện tạo, sửa, xóa tài khoản người dùng (quản lý người dùng).
+ Phân quyền truy cập theo vai trò (role-based access control).
+ Cấu hình các tham số chung: năm học, kỳ học, đơn vị tiền tệ, đơn vị học phí.
+ Quản lý sao lưu, khôi phục dữ liệu và theo dõi nhật ký hệ thống (log).
+ Thực hiện cập nhật, nâng cấp phần mềm khi cần.
- Mục tiêu sử dụng hệ thống:
Đảm bảo hệ thống hoạt động ổn định, bảo mật và sẵn sàng cho tất cả các đối tượng người
dùng khác.
 Cán bộ phòng đào tạo (Academic Officer)
- Mô tả:
Là người phụ trách các công việc chuyên môn liên quan đến chương trình đào tạo, học phần,
và kế hoạch giảng dạy.
- Đặc điểm và quyền hạn:
8
+ Quản lý danh mục học phần, khối kiến thức, và cấu trúc chương trình đào tạo.
+ Xây dựng và cập nhật chương trình đào tạo cho từng ngành, khóa học.
+ Sao chép chương trình đào tạo từ các khóa trước và điều chỉnh phù hợp.
+ Theo dõi tình trạng các chương trình đào tạo (đang soạn thảo, phê duyệt, áp dụng).
+ In và xuất các báo cáo về chương trình đào tạo.
+ Phối hợp với phòng tài chính trong việc xác định đơn vị học phí cho từng học phần.
- Mục tiêu sử dụng hệ thống:
Tối ưu hóa quy trình xây dựng, phê duyệt, và quản lý chương trình đào tạo, giảm thiểu sai sót
và trùng lặp dữ liệu.
 Cán bộ phòng tài chính / kế toán (Financial Officer)
- Mô tả:
Là người chịu trách nhiệm thiết lập, tính toán và kiểm tra học phí dựa trên chương trình đào
tạo và các quy định học vụ.
- Đặc điểm và quyền hạn:
+ Quản lý bảng đơn vị học phí theo học phần, khối kiến thức hoặc hệ đào tạo.
+ Cấu hình công thức tính học phí (theo số tín chỉ, loại học phần, hình thức đào tạo, v.v.).
+ Tính toán học phí cho từng chương trình đào tạo hoặc cho sinh viên cụ thể.
+ Xuất báo cáo tổng hợp, so sánh, và phân tích dữ liệu học phí.
+ Làm việc phối hợp với phòng đào tạo để đảm bảo tính chính xác và thống nhất dữ liệu.
- Mục tiêu sử dụng hệ thống:
Tự động hóa việc tính học phí, đảm bảo minh bạch, chính xác và giảm sai sót trong quy trình
tài chính đào tạo.
 Giảng viên (Lecturer)
- Mô tả:
Là người trực tiếp giảng dạy các học phần trong chương trình đào tạo.
- Đặc điểm và quyền hạn:
+ Truy cập để xem danh mục học phần, khối kiến thức, và chương trình đào tạo của ngành
giảng dạy.
+ Đề xuất cập nhật nội dung học phần, đề cương chi tiết hoặc phương pháp giảng dạy.
+ Góp ý cho các chương trình đào tạo trong quá trình soạn thảo.
+ Xem các thống kê liên quan đến khối lượng giảng dạy, số tín chỉ phụ trách, v.v.
9
- Mục tiêu sử dụng hệ thống:
Hỗ trợ giảng viên chủ động trong việc cập nhật, đề xuất và theo dõi chương trình giảng dạy
của mình.
 Sinh viên (Student)
- Mô tả:
Là đối tượng thụ hưởng trực tiếp của chương trình đào tạo.
- Đặc điểm và quyền hạn:
+ Truy cập để xem chương trình đào tạo, khối kiến thức, và học phần theo ngành, khóa học
của mình.
+ Xem thông tin học phí dự kiến hoặc học phí chi tiết cho từng học phần.
+ Theo dõi các thay đổi, cập nhật về cấu trúc chương trình học.
+ Có thể gửi phản hồi hoặc đánh giá về chương trình học (nếu hệ thống có tính năng phản hồi
người học).
- Mục tiêu sử dụng hệ thống:
Cập nhật thông tin học tập, chương trình đào tạo và học phí một cách minh bạch, nhanh
chóng.
 Ban giám hiệu (Management Board)
- Mô tả:
Là người có quyền giám sát, phê duyệt và đưa ra quyết định liên quan đến chương trình đào
tạo và kế hoạch tài chính.
- Đặc điểm và quyền hạn:
+ Xem, phê duyệt các chương trình đào tạo do phòng đào tạo đề xuất.
+ Theo dõi báo cáo thống kê về học phần, khối kiến thức, nhân sự và học phí.
+ Phê duyệt thay đổi, cập nhật và ban hành chương trình đào tạo chính thức.
+ Có quyền xem toàn bộ dữ liệu tổng hợp nhưng không chỉnh sửa.
- Mục tiêu sử dụng hệ thống:
Nắm bắt nhanh tình hình đào tạo, hỗ trợ ra quyết định quản lý dựa trên dữ liệu chính xác và
cập nhật.
2.3. Môi trường hoạt động
Hệ thống Quản lý đào tạo được xây dựng và vận hành trên nền tảng web, nhằm đảm bảo khả
năng truy cập dễ dàng, linh hoạt và không phụ thuộc vào hệ điều hành cụ thể.
- Môi trường phần mềm
+ Hệ điều hành máy chủ: Windows Server.
10
+ Nền tảng phát triển:
o UI Layer: React + JSX
o Build Tool: Vite
o API Layer: Axios ($\text{src/services/api.js}$)
o Backend: Express.js
o ORM: Sequelize
o Database: MySQL (khả năng cao)
+ Cơ sở dữ liệu: MySQL, PostgreSQL hoặc SQL Server.
+ Trình duyệt hỗ trợ: Google Chrome, Microsoft Edge, Mozilla Firefox, Safari (phiên bản
mới nhất).
+ Ngôn ngữ hiển thị: Tiếng Việt (mặc định), có thể mở rộng sang tiếng Anh trong tương lai.
- Môi trường phần cứng
+ Máy trạm người dùng:
o Kết nối Internet ổn định.
o Trình duyệt hiện đại hỗ trợ HTML5, CSS3, JavaScript.
o Không yêu cầu cài đặt phần mềm bổ sung.
- Môi trường triển khai
+ Hệ thống được triển khai trực tuyến (web-based), người dùng truy cập qua địa chỉ URL nội
bộ hoặc Internet tùy chính sách quản lý.
+ Hỗ trợ mô hình client-server, đảm bảo khả năng mở rộng khi có thêm nhiều người dùng.
+ Có thể tích hợp với hệ thống xác thực tập trung (SSO) của trường đại học để đồng bộ người
dùng và quyền truy cập.
2.4. Các ràng buộc thiết kế và cài đặt
Hệ thống Quản lý Đào tạo được thiết kế linh hoạt, tương thích với nhiều môi trường
công nghệ hiện nay, đảm bảo có thể triển khai hiệu quả tại các trường đại học, vận hành ổn
định, và đáp ứng yêu cầu bảo mật, hiệu năng, mở rộng trong tương lai.
- Ràng buộc về kiến trúc hệ thống
+ Hệ thống phải được phát triển theo mô hình client–server, với phần giao diện chạy trên
trình duyệt web và phần xử lý nghiệp vụ đặt trên máy chủ ứng dụng.
+ Giao tiếp giữa client và server phải sử dụng giao thức HTTP/HTTPS để đảm bảo bảo mật
và tương thích.
+ Toàn bộ dữ liệu trao đổi giữa các thành phần phải tuân thủ chuẩn JSON để dễ dàng tích
hợp với các hệ thống khác.
- Ràng buộc về công nghệ
11
+ Hệ thống chỉ được triển khai dưới dạng ứng dụng web, không yêu cầu cài đặt phần mềm
phía người dùng.
+ Ngôn ngữ và công nghệ sử dụng phải phổ biến, dễ bảo trì — ví dụ:
o Frontend: HTML5, CSS3, JavaScript, framework (ReactJS, VueJS, hoặc
Angular).
o Backend: .NET Core / Java Spring Boot / Python Django / PHP Laravel.
o Database: MySQL hoặc PostgreSQL.
+ Giao diện phải tương thích đa nền tảng, có khả năng hiển thị tốt trên các trình duyệt phổ
biến (Chrome, Edge, Firefox, Safari).
- Ràng buộc về bảo mật
+ Hệ thống bắt buộc triển khai trên kết nối HTTPS (SSL/TLS).
+ Dữ liệu người dùng phải được mã hóa trong quá trình truyền tải và lưu trữ.
+ Các tài khoản người dùng phải được phân quyền chi tiết theo vai trò (quản trị viên, giảng
viên, sinh viên, nhân viên đào tạo…).
+ Đăng nhập phải thông qua xác thực an toàn (mật khẩu mã hóa hoặc Single Sign-On nếu
có).
- Ràng buộc về triển khai và vận hành
+ Hệ thống phải có khả năng triển khai trên máy chủ nội bộ hoặc máy chủ đám mây (Cloud
như AWS, Azure, hoặc Google Cloud).
+ Phải đảm bảo khả năng sao lưu và khôi phục dữ liệu định kỳ.
+ Mọi thay đổi và cập nhật phiên bản phải được ghi nhận qua hệ thống quản lý phiên bản
(Git).
+ Thời gian downtime khi cập nhật không vượt quá 30 phút để đảm bảo hoạt động đào tạo
không bị gián đoạn.
- Ràng buộc về giao diện và trải nghiệm người dùng
+ Giao diện phải tuân thủ chuẩn thiết kế UX/UI hiện đại, dễ sử dụng cho cả người dùng có kỹ
năng công nghệ hạn chế.
+ Màu sắc, bố cục phải phù hợp với bản sắc của đơn vị đào tạo (trường đại học).
+ Toàn bộ chức năng quản lý (như tạo, sửa, xóa, tìm kiếm) phải được thực hiện qua giao diện
web, không thông qua công cụ bên ngoài.
2.5. Các giải thiết và sự phụ thuộc nghiệp vụ
 Các giả thiết
12
Trong quá trình phân tích và thiết kế hệ thống, một số giả thiết được đặt ra nhằm đảm bảo
việc triển khai và vận hành hệ thống diễn ra thuận lợi:
- Cam kết và định hướng từ Ban Giám hiệu
+ Ban Giám hiệu nhà trường cam kết chỉ đạo xuyên suốt và hỗ trợ đầy đủ trong suốt quá trình
triển khai hệ thống.
+ Các chính sách, quy trình nghiệp vụ đào tạo được thống nhất và ban hành rõ ràng để hệ
thống có thể mô hình hóa chính xác.
+ Có sự phối hợp giữa các phòng ban (phòng đào tạo, phòng tài chính, phòng tổ chức – hành
chính) trong việc cung cấp dữ liệu đầu vào.
- Năng lực và sự sẵn sàng của đội ngũ nhân sự
+ Nhân sự thuộc các đơn vị sử dụng hệ thống (phòng đào tạo, khoa, giảng viên, sinh viên…)
có kiến thức cơ bản về công nghệ thông tin và sẵn sàng học tập cách sử dụng hệ thống.
+ Sau khi được hướng dẫn và đào tạo, người dùng có thể thao tác độc lập, đảm bảo quy trình
vận hành thông suốt.
+ Các đơn vị có đầu mối phụ trách kỹ thuật để tiếp nhận, hỗ trợ và phản hồi các vấn đề phát
sinh trong quá trình sử dụng.
- Nguồn dữ liệu đầu vào được chuẩn hóa
+ Dữ liệu về nhân sự, học phần, chương trình đào tạo, khối kiến thức, học phí... được chuẩn
hóa và kiểm tra tính chính xác trước khi nhập vào hệ thống.
+ Các quy định về cấu trúc chương trình đào tạo, định mức học phí và phân quyền người
dùng đã được ban hành thống nhất.
 Các sự phụ thuộc nghiệp vụ
Hệ thống quản lý đào tạo không hoạt động độc lập, mà có mối quan hệ và phụ thuộc vào
nhiều yếu tố hạ tầng, quy trình và hệ thống khác trong trường đại học:
- Phụ thuộc vào hạ tầng công nghệ thông tin của nhà trường
+ Hệ thống yêu cầu máy chủ, mạng nội bộ và kết nối Internet ổn định để đảm bảo hiệu năng
và tính sẵn sàng.
+ Cần có chính sách bảo mật, sao lưu và khôi phục dữ liệu do bộ phận CNTT phụ trách.
+ Việc triển khai, vận hành và cập nhật hệ thống phụ thuộc vào năng lực quản trị hệ thống
của đội ngũ kỹ thuật của trường.
- Phụ thuộc vào các hệ thống liên quan
+ Hệ thống cần tích hợp hoặc đồng bộ dữ liệu với các hệ thống đang tồn tại, bao gồm:
13
o Hệ thống quản lý đào tạo (hiện hành): để lấy dữ liệu sinh viên, giảng viên, học phần,
điểm số, và chương trình học.
o Hệ thống quản lý tài chính – kế toán: để tính toán và đối soát học phí, lệ phí, và các
khoản thu khác.
o Hệ thống quản lý văn bản – hồ sơ: để lưu trữ quyết định mở ngành, chuẩn đầu ra, và
các biểu mẫu quản lý đào tạo.
+ Cơ chế tích hợp có thể thông qua API, cơ sở dữ liệu trung gian, hoặc trao đổi tệp dữ liệu
định kỳ.
- Phụ thuộc vào quy trình và chính sách quản lý đào tạo của nhà trường
+ Hệ thống hoạt động dựa trên các quy chế, quy định, và khung chương trình đào tạo do Bộ
Giáo dục và Đào tạo hoặc trường ban hành.
+ Khi có sự thay đổi về chính sách học phí, chuẩn đầu ra, hay cấu trúc chương trình, hệ thống
cần được điều chỉnh và cập nhật kịp thời.
+ Việc tính toán học phí phụ thuộc vào quy định nội bộ của trường về đơn vị học phí, tín chỉ,
và các hệ đào tạo (chính quy, liên thông, sau đại học...).
3. CÁC THUẬT NGỮ
Thuật ngữ Định nghĩa
Chương trình đào tạo Chương trình đào tạo – tập hợp các khối kiến thức và học phần mà
sinh viên phải hoàn thành để đạt chuẩn đầu ra của ngành học.
Học phần Đơn vị học tập thuộc chương trình đào tạo, có mã định danh, số tín
chỉ, nội dung và hình thức đánh giá cụ thể.
Khối kiến thức Nhóm học phần có cùng đặc điểm hoặc mục tiêu đào tạo (ví dụ:
Đại cương, Cơ sở ngành, Chuyên ngành, Tốt nghiệp).
Tín chỉ Đơn vị đo lường khối lượng học tập, gồm giờ lý thuyết, thực hành
và tự học (theo quy định của Bộ Giáo dục & Đào tạo).
Phòng đào tạo Đơn vị chức năng của trường đại học, chịu trách nhiệm xây dựng
và quản lý chương trình đào tạo.
Sao chép chương
trình đào tạo
Tạo một chương trình đào tạo mới dựa trên chương trình đào tạo
đã có (thường dùng khi xây dựng chương trình đào tạo cho khóa
mới hoặc ngành tương tự).
Đơn vị học phí Mức học phí được quy định cho một tín chỉ hoặc một học phần.
Cấu trúc chương trình
đào tạo
Mối liên kết giữa khối kiến thức, học phần, và học kỳ trong toàn
bộ chương trình đào tạo.
Phòng đào tạo Đơn vị chuyên trách thuộc nhà trường, chịu trách nhiệm xây dựng,
cập nhật và phê duyệt chương trình đào tạo, kế hoạch học tập, lịch
giảng dạy, và các quy định đào tạo.
Cán bộ đào tạo Người sử dụng hệ thống để nhập, quản lý, và phê duyệt dữ liệu
chương trình đào tạo.
Giảng viên Người giảng dạy học phần, có quyền truy cập vào hệ thống để xem
thông tin học phần, tải tài liệu, và nhập kết quả đánh giá học tập
của sinh viên.
Sinh viên Người học trong trường đại học, sử dụng hệ thống để tra cứu
chương trình đào tạo, đăng ký học phần, xem học phí và kết quả
học tập.
14
Người quản trị hệ
thống (Admin)
Người chịu trách nhiệm quản lý người dùng, phân quyền truy cập,
sao lưu dữ liệu, và bảo trì hệ thống.
Cơ cấu tổ chức Cấu trúc hành chính – chuyên môn của trường đại học, bao gồm
các khoa, viện, bộ môn, phòng ban, là cơ sở để phân quyền và
quản lý dữ liệu trong hệ thống.
Quản lý nhân sự đào
tạo
Chức năng quản lý thông tin về giảng viên, cán bộ, nhân viên, bao
gồm hồ sơ, đơn vị công tác, vai trò và quyền truy cập hệ thống.
Sao chép chương
trình đào tạo
Chức năng cho phép tạo mới một CTĐT bằng cách nhân bản từ
chương trình đã có, phục vụ việc cập nhật CTĐT cho khóa học
mới hoặc ngành tương tự.
4. ĐẶC TẢ USE CASE (YÊU CẦU CHỨC NĂNG)
4.1. Danh sách các use case
Mã Tên use case Tác nhân chính Mô tả
UC1 Quản lý cơ cấu tổ chức Quản trị viên Quản lý thông tin các
khoa, bộ môn, lớp học.
UC2 Quản lý người dùng/
nhân sự
UC3 Quản lý học phần Phòng đào tạo Quản lý danh mục học
phần, tín chỉ, mô tả môn
học.
UC4 Quản lý khối kiến thức Phòng đào tạo Tổ chức học phần theo
khối kiến thức bắt buộc/tự
chọn.
UC5 Xây dựng chương trình
đào tạo
Phòng đào tạo Thiết lập cấu trúc CTĐT
theo học kỳ, năm học.
UC6 Quản lý cấu trúc
chương trình đào tạo
Phòng đào tạo Tạo mới, sao chép, và hiển
thị CTĐT.
UC7 Thiết lập đơn vị học
phí
Phòng đào tạo/ ban tài
chính
Tạo mới, sao chép, và hiển
thị CTĐT.
UC8 Tính toán học phí
4.2. Đặc tả và xây dựng giao diện nhóm UC1 – Quản lý cơ cấu tổ chức
 Mô tả tổng quan
Use Case này mô tả quá trình người quản trị hệ thống (Admin) thực hiện các thao tác
quản lý thông tin về đơn vị tổ chức trong hệ thống, bao gồm: thêm mới, chỉnh sửa, xem chi
tiết, tìm kiếm và xóa đơn vị.
Mục đích chính là giúp hệ thống duy trì một cấu trúc phân cấp tổ chức thống nhất, phản ánh
chính xác mô hình hoạt động thực tế của doanh nghiệp hoặc tổ chức.
- Hệ thống cho phép người dùng:
+ Tạo mới đơn vị tổ chức với các thông tin cơ bản (mã đơn vị, tên, mô tả, đơn vị cha, người
phụ trách, thông tin liên hệ).
+ Cập nhật thông tin khi có thay đổi trong cơ cấu tổ chức.
+ Xóa đơn vị không còn hoạt động, với điều kiện không có đơn vị con hoặc nhân sự liên kết.
+ Tra cứu, tìm kiếm nhanh theo mã, tên hoặc người phụ trách.
15
- Trong quá trình thực hiện, hệ thống tự động kiểm tra:
+ Tính duy nhất của mã đơn vị.
+ Ràng buộc phân cấp giữa các đơn vị cha – con.
+ Tính hợp lệ dữ liệu (định dạng email, độ dài chuỗi, ký tự hợp lệ).
- Kết quả của Use case1 là dữ liệu tổ chức được cập nhật chính xác, đảm bảo các module
khác (như Quản lý nhân sự, Phân quyền người dùng, Báo cáo thống kê) có thể truy xuất đúng
và nhất quán thông tin phân cấp tổ chức.
- Mức độ ưu tiên: Cao
- Mục tiêu chính: Cung cấp công cụ quản lý cơ cấu tổ chức rõ ràng, giúp duy trì tính nhất
quán, chính xác và dễ tra cứu thông tin trong toàn hệ thống.
 Các chức năng chính
Mã UC Tên Use Case Mô tả Tác nhân
UC1.1 Thêm đơn vị tổ
chức
Cho phép thêm mới đơn vị (Trường,
Khoa, Bộ môn, Phòng ban).
Cán bộ Phòng Tổ
chức
UC1.2 Cập nhật đơn vị
tổ chức
Sửa tên, mã hoặc cấp quản lý của đơn
vị.
Cán bộ Phòng Tổ
chức
UC1.3 Xóa đơn vị tổ
chức
Xóa đơn vị khi không còn sử dụng. Cán bộ Phòng Tổ
chức
UC1.4 Xem danh sách
đơn vị
Liệt kê tất cả đơn vị trong sơ đồ tổ
chức
Cán bộ, Quản trị
viên
UC1.5 Tìm kiếm đơn vị Tìm nhanh đơn vị theo mã hoặc tên. Cán bộ Phòng Tổ
chức
UC1.6 Xem sơ đồ cơ cấu
tổ chức
Xem toàn bộ cơ cấu tổ chức Cán bộ Phòng Tổ
chức, Ban Giám
hiệu
 Đặc tả Use Case
- Use Case UC1.1 – Thêm đơn vị tổ chức
Tên Use case Thêm đơn vị tổ chức
Được tạo bởi: Phòng Tổ chức Cập nhật lần cuối
bởi:
Cán bộ phụ trách hệ
thống
Ngày tạo: Ngày sửa đổi cuối
cùng:
10/2025
Mô tả - Tạo mới một đơn vị trong cơ cấu tổ chức của trường (ví dụ: Khoa, Bộ môn,
Phòng ban).
- Cán bộ Phòng Tổ chức truy cập vào chức năng “Quản lý cơ cấu tổ chức” để
thêm mới một đơn vị trong hệ thống. Người dùng nhập thông tin bao gồm mã
đơn vị, tên đơn vị, loại đơn vị (Trường, Khoa, Bộ môn, Phòng), đơn vị cha
(nếu có) và mô tả.
- Sau khi xác nhận, hệ thống kiểm tra trùng mã đơn vị và lưu thông tin mới
vào cơ sở dữ liệu.
Tác nhân - Quản trị viên hệ thống.
- Cán bộ Phòng Tổ chức.
16
Tiền điều
kiện
1. Người dùng đã đăng nhập và có quyền “Thêm đơn vị”.
2. Hệ thống đã có ít nhất một đơn vị gốc (ví dụ: Trường).
3. Cơ sở dữ liệu sẵn sàng ghi nhận dữ liệu mới (bảng OrganizationUnit hoạt
động bình thường).
Hậu điều
kiện
1. Đơn vị mới được lưu thành công vào Cơ sở dữ liệu.
2. Hệ thống cập nhật cây cơ cấu tổ chức.
3. Ghi log thao tác thêm đơn vị.
4. Hiển thị thông báo “Thêm đơn vị thành công”.
Luồng
chính
1. Người dùng mở chức năng Cơ cấu tổ chức → Thêm đơn vị.
2. Hệ thống hiển thị form nhập thông tin đơn vị, bao gồm:
- Mã đơn vị
- Tên đơn vị
- Loại đơn vị (Khoa, Phòng, Bộ môn, Trung tâm, v.v.)
- Đơn vị cha (nếu có).
3. Hệ thống tải danh sách loại đơn vị và danh sách đơn vị cha hiện có.
4. Người dùng nhập thông tin vào form và chọn đơn vị cha.
5. Hệ thống kiểm tra tính hợp lệ của dữ liệu:
- Trường bắt buộc không được để trống.
- Mã đơn vị chưa tồn tại trong hệ thống.
6. Nếu hợp lệ, người dùng nhấn Lưu.
7. Hệ thống gửi yêu cầu lưu đến server.
8. Server xác thực quyền và kiểm tra ràng buộc mã trùng (OrgCode).
9. Nếu đạt yêu cầu, server ghi dữ liệu vào cơ sở dữ liệu, cập nhật cây tổ chức,
ghi log.
10. Hệ thống hiển thị thông báo “Thêm đơn vị thành công” và cập nhật danh
sách hiển thị.
11. Người dùng có thể chọn “Thêm mới đơn vị khác” hoặc quay lại danh
sách.
12. Use case kết thúc.
Luồng
phụ
- Bước 3: Lỗi tải danh sách loại đơn vị hoặc đơn vị cha.
→ Hệ thống hiển thị thông báo “Không thể tải danh sách, vui lòng thử lại
sau.”
→ Người dùng có thể thử tải lại hoặc thoát chức năng.
- Bước 5a: Thông tin nhập thiếu hoặc sai định dạng.
→ Hệ thống đánh dấu các trường lỗi và hiển thị thông báo “Vui lòng nhập
đầy đủ thông tin bắt buộc.”
→ Quay lại form để người dùng chỉnh sửa.
- Bước 5b hoặc 8a: Mã đơn vị đã tồn tại trong hệ thống.
→ Hệ thống hiển thị cảnh báo “Mã đơn vị đã tồn tại, vui lòng nhập mã khác.”
→ Người dùng sửa mã và thực hiện lại bước 6.
- Bước 7: Mất kết nối khi gửi yêu cầu đến server.
→ Hệ thống hiển thị thông báo “Không thể kết nối tới máy chủ.”
→ Giữ nguyên dữ liệu đã nhập để người dùng thử lại.
- Bước 9: Server ghi dữ liệu thất bại (lỗi hệ thống, database)
→ Hệ thống nhận thông báo lỗi từ server và hiển thị “Không thể lưu dữ liệu,
vui lòng thử lại sau.”
→ Quay lại form, dữ liệu nhập được giữ nguyên.
Ngoại lệ 1. Người dùng không có quyền thêm đơn vị.
→ Hiển thị thông báo “Bạn không có quyền thực hiện thao tác này.”
2. Lỗi hệ thống hoặc mất kết nối kéo dài.
17
→ Ghi log lỗi và yêu cầu người dùng đăng nhập lại.
Yêu cầu 1. Mã đơn vị (OrgCode) phải duy nhất trong toàn bộ hệ thống.
2. Các trường bắt buộc:
- Mã đơn vị.
- Tên đơn vị.
- Loại đơn vị.
3. Hệ thống phải ghi log thao tác người dùng.
4. Dữ liệu lưu thành công phải được đồng bộ lên cây tổ chức hiển thị ngay lập
tức.
Dữ liệu sử
dụng
- Bảng OrganizationUnit (Bảng thông tin các đơn vị).
- Use Case UC1.2 – Cập nhật đơn vị tổ chức
Tên Use case Cập nhật đơn vị tổ chức
Được tạo bởi: Phòng Tổ chức Cập nhật lần cuối
bởi:
Cán bộ phụ trách hệ
thống
Ngày tạo: Ngày sửa đổi cuối
cùng:
10/2025
Mô tả - Cập nhật, chỉnh sửa thông tin đơn vị hiện có trong hệ thống.
- Khi có thay đổi trong cơ cấu, cán bộ có thể cập nhật lại thông tin tên đơn
vị, loại hình hoặc đơn vị cha. Ví dụ: đổi tên “Khoa CNTT” thành “Khoa
Công nghệ số”. Hệ thống đảm bảo tính toàn vẹn dữ liệu và kiểm tra các
quan hệ phụ thuộc trước khi cập nhật.
Tác nhân - Quản trị viên hệ thống.
- Cán bộ Phòng Tổ chức.
Tiền điều
kiện
1. Người dùng đã đăng nhập hợp lệ.
2. Có quyền “Cập nhật cơ cấu tổ chức”.
3. Đơn vị cần cập nhật đã tồn tại trong hệ thống.
Hậu điều
kiện
1. Thông tin đơn vị được cập nhật trong CSDL.
2. Cây cơ cấu tổ chức được làm mới để hiển thị dữ liệu mới.
3. Log thao tác được ghi nhận.
18
Luồng chính 1. Người dùng mở chức năng Cơ cấu tổ chức → Danh sách đơn vị.
2. Người dùng chọn một đơn vị cần cập nhật và nhấn nút Chỉnh sửa.
3. Hệ thống hiển thị form cập nhật, điền sẵn thông tin hiện tại của đơn vị.
4. Hệ thống tải danh sách loại đơn vị và danh sách đơn vị cha (nếu có).
5. Người dùng chỉnh sửa thông tin:
- Tên.
- Loại đơn vị.
- Đơn vị cha.
- Trạng thái hoạt động.
6. Người dùng nhấn Lưu thay đổi.
7. Hệ thống kiểm tra tính hợp lệ của dữ liệu:
- Các trường bắt buộc không được để trống.
- Không gây xung đột với cấu trúc cây (ví dụ: đơn vị cha không thể là
chính nó hoặc con của nó).
8. Nếu hợp lệ, hệ thống gửi yêu cầu cập nhật đến server.
9. Server xác thực quyền, kiểm tra ràng buộc và ghi dữ liệu cập nhật vào
cơ sở dữ liệu.
10. Hệ thống hiển thị thông báo “Cập nhật đơn vị thành công” và làm mới
danh sách hiển thị.
11. Người dùng có thể tiếp tục chỉnh sửa đơn vị khác hoặc quay lại danh
sách.
12. Use case kết thúc.
Luồng phụ - Bước 4a: Lỗi tải danh sách loại đơn vị hoặc đơn vị cha.
→ Hệ thống hiển thị thông báo “Không thể tải danh sách, vui lòng thử lại
sau.”
→ Người dùng có thể thử tải lại hoặc hủy thao tác.
- Bước 7a: Thông tin nhập không hợp lệ hoặc trống.
→ Hệ thống đánh dấu các trường lỗi và hiển thị thông báo “Vui lòng nhập
đầy đủ và hợp lệ.”
→ Người dùng sửa lại thông tin.
- Bước 7b: Người dùng chọn đơn vị cha trùng hoặc là đơn vị con của chính
mình.
→ Hệ thống hiển thị cảnh báo “Không thể chọn đơn vị cha là chính nó
hoặc đơn vị con của nó.”
→ Người dùng chọn lại đơn vị cha hợp lệ.
- Bước 8a: Lỗi kết nối server hoặc ghi dữ liệu thất bại.
→ Hệ thống hiển thị thông báo “Không thể cập nhật dữ liệu, vui lòng thử
lại.”
→ Dữ liệu nhập được giữ nguyên.
Exceptions 1. Người dùng không có quyền cập nhật đơn vị → hiển thị thông báo “Bạn
không có quyền thực hiện thao tác này.”
2. Lỗi hệ thống hoặc mất kết nối kéo dài → ghi log lỗi và yêu cầu người
dùng đăng nhập lại.
Requirements 1. Mã đơn vị (OrgCode) không được phép thay đổi sau khi đã tạo.
2. Các trường bắt buộc phải hợp lệ trước khi lưu.
3. Cập nhật thành công phải phản ánh ngay trong cây tổ chức và danh sách
đơn vị.
4. Hệ thống phải ghi log chi tiết (người thao tác, thời gian, nội dung thay
đổi).
19
Dữ liệu sử
dụng
- Bảng OrganizationUnit (Bảng thông tin các đơn vị).
- Use Case UC1.3 - Xóa đơn vị tổ chức
Tên Use case Xóa đơn vị tổ chức
Được tạo bởi: Phòng Tổ chức Cập nhật lần cuối
bởi:
Cán bộ phụ trách hệ
thống
Ngày tạo: Ngày sửa đổi cuối
cùng:
10/2025
Mô tả - Xóa một đơn vị khỏi hệ thống khi đơn vị đó không còn hoạt động hoặc
không có đơn vị con/nhân sự trực thuộc.
- Cán bộ có thể xóa đơn vị khi đơn vị không còn hoạt động. Trước khi xóa, hệ
thống sẽ kiểm tra xem đơn vị đó có nhân sự hoặc đơn vị con hay không. Nếu
có liên kết, hệ thống yêu cầu xóa hoặc chuyển dữ liệu trước..
Tác nhân - Quản trị viên hệ thống.
- Cán bộ Phòng Tổ chức.
Tiền điều
kiện
1. Người dùng đã đăng nhập và có quyền “Xóa đơn vị”.
2. Đơn vị cần xóa tồn tại trong hệ thống.
3. Đơn vị không có đơn vị con hoặc nhân sự trực thuộc.
Hậu điều
kiện
1. Đơn vị bị xóa sẽ không còn hiển thị trong danh sách và cây cơ cấu tổ chức.
2. Log thao tác được ghi nhận trong hệ thống.
3. Cơ cấu tổ chức được cập nhật lại sau khi xóa.
Luồng
chính
1. Người dùng mở chức năng Cơ cấu tổ chức → Danh sách đơn vị.
2. Người dùng chọn một đơn vị cần xóa và nhấn nút Xóa.
3. Hệ thống hiển thị hộp thoại xác nhận “Bạn có chắc muốn xóa đơn vị này
không?”.
4. Người dùng nhấn Đồng ý để tiếp tục.
5. Hệ thống thực hiện kiểm tra ràng buộc:
- Đơn vị có đơn vị con không?
- Đơn vị có nhân sự hoặc dữ liệu liên kết (chương trình đào tạo, lớp học, học
phần,...) không?
6. Nếu không vi phạm ràng buộc, hệ thống gửi yêu cầu xóa đến server.
7. Server xác thực quyền, kiểm tra quan hệ dữ liệu, và thực hiện xóa bản ghi
trong cơ sở dữ liệu (bằng cách cập nhật trạng thái hoặc xóa vật lý tùy cấu
hình).
8. Hệ thống cập nhật cây cơ cấu tổ chức và danh sách hiển thị mới.
9. Hiển thị thông báo “Xóa đơn vị thành công”.
10. Use Case kết thúc.
Luồng
phụ
- Bước 3: Người dùng nhấn “Hủy” trong hộp thoại xác nhận.
→ Hệ thống dừng thao tác, không thực hiện xóa.
- Bước 5a: Đơn vị có đơn vị con trực thuộc.
→ Hệ thống hiển thị thông báo “Không thể xóa đơn vị vì đang có đơn vị con
trực thuộc.”
→ Gợi ý người dùng xóa hoặc chuyển đơn vị con trước.
- Bước 5b: Đơn vị có nhân sự hoặc dữ liệu liên kết.
→ Hệ thống hiển thị cảnh báo “Đơn vị đang được sử dụng, không thể xóa.”
→ Gợi ý người dùng chuyển dữ liệu hoặc khóa đơn vị thay vì xóa.
20
- Bước 7: Lỗi server hoặc kết nối thất bại.
→ Hệ thống hiển thị thông báo “Không thể xóa đơn vị, vui lòng thử lại sau.”
Ngoại lệ 1. Người dùng không có quyền xóa đơn vị.
→ Hiển thị thông báo “Bạn không có quyền thực hiện thao tác này.”
2. Lỗi truy cập cơ sở dữ liệu hoặc lỗi hệ thống.
→ Ghi log lỗi và thông báo “Có lỗi xảy ra, vui lòng liên hệ quản trị viên.”
Yêu cầu 1. Đơn vị chỉ được phép xóa khi không còn dữ liệu liên kết (nhân sự, học
phần, chương trình đào tạo, lớp học).
2. Các thao tác xóa phải được xác nhận hai bước (confirm dialog).
3. Hệ thống phải ghi log đầy đủ (người xóa, thời gian, ID đơn vị).
4. Sau khi xóa, danh sách và cây tổ chức phải được cập nhật ngay.
Dữ liệu sử
dụng
- Bảng OrganizationUnit (Bảng thông tin các đơn vị), liên kết với
UserAccount (Bảng nhân sự - ở phân hệ quản lý người dùng/ nhân sự)
- Use Case UC1.4 – Xem danh sách đơn vị tổ chức
Tên Use case Xem danh sách đơn vị tổ chức
Được tạo bởi: Phòng Tổ chức Cập nhật lần cuối
bởi:
Cán bộ phụ trách hệ
thống
Ngày tạo: Ngày sửa đổi cuối
cùng:
10/2025
Mô tả - Hiển thị toàn bộ danh sách đơn vị có trong hệ thống, cho phép người dùng
xem theo dạng bảng hoặc cây phân cấp.
- Cán bộ có thể xem toàn bộ danh sách các đơn vị trong trường theo dạng cây
tổ chức, hiển thị mối quan hệ cha – con.
- Hệ thống hỗ trợ lọc theo loại (Khoa, Bộ môn, Phòng ban) và sắp xếp theo
tên.
Tác nhân - Cán bộ Phòng Tổ chức.
- Quản trị viên hệ thống.
- Người dùng có quyền “Xem cơ cấu tổ chức”.
Tiền điều
kiện
1. Người dùng đã đăng nhập vào hệ thống.
2. Có quyền truy cập vào module “Cơ cấu tổ chức”.
Hậu điều
kiện
1. Hệ thống hiển thị danh sách đơn vị theo dạng bảng hoặc cây (tree view).
2. Người dùng có thể xem chi tiết thông tin đơn vị, hoặc truy cập nhanh đến
các chức năng cập nhật, xóa.
Luồng
chính
1. Người dùng chọn chức năng Cơ cấu tổ chức → Danh sách đơn vị.
2. Hệ thống truy vấn dữ liệu danh sách đơn vị từ cơ sở dữ liệu (bao gồm: mã
đơn vị, tên, loại, đơn vị cha, trạng thái).
3. Hệ thống hiển thị danh sách theo dạng bảng hoặc cây tổ chức.
4. Người dùng có thể thực hiện:
- Tìm kiếm theo mã hoặc tên đơn vị.
- Lọc theo loại đơn vị (Khoa, Phòng, Bộ môn, Trung tâm…).
- Mở chi tiết một đơn vị để xem thông tin.
5. Hệ thống hiển thị chi tiết thông tin của đơn vị được chọn: mã, tên, loại, đơn
vị cha, trạng thái, ngày tạo, người tạo.
6. Người dùng có thể quay lại danh sách hoặc chọn các thao tác khác (Thêm,
Sửa, Xóa).
7. Use Case kết thúc.
21
Luồng
phụ
- Bước 2a: Không có dữ liệu trong hệ thống.
→ Hệ thống hiển thị thông báo “Hiện chưa có đơn vị nào được tạo.” và cung
cấp nút Thêm mới.
- Bước 2b: Lỗi kết nối hoặc truy vấn cơ sở dữ liệu thất bại.
→ Hệ thống hiển thị thông báo “Không thể tải danh sách đơn vị, vui lòng thử
lại.”
- Bước 4: Người dùng nhập từ khóa tìm kiếm không tồn tại.
→ Hệ thống hiển thị “Không tìm thấy kết quả phù hợp.”
Ngoại lệ 1. Người dùng không có quyền xem danh sách.
→ Hiển thị thông báo “Bạn không có quyền truy cập chức năng này.”
2. Lỗi hệ thống hoặc dữ liệu hỏng → hiển thị thông báo lỗi và ghi log.
Yêu cầu 1. Dữ liệu phải được tải và hiển thị nhanh (≤ 3 giây cho danh sách ≤ 500 đơn
vị).
2. Hỗ trợ tìm kiếm theo tên và mã không phân biệt chữ hoa/thường.
3. Giao diện hiển thị rõ ràng, hỗ trợ phân cấp cây tổ chức.
4. Hệ thống ghi log thao tác truy cập danh sách (người xem, thời gian).
Dữ liệu sử
dụng
- Bảng OrganizationUnit (Bảng thông tin các đơn vị).
- Use Case UC1.5 – Tìm kiếm đơn vị
Tên Use case Tìm kiếm đơn vị
Được tạo bởi: Phòng Tổ chức Cập nhật lần cuối
bởi:
Cán bộ phụ trách hệ
thống
Ngày tạo: Ngày sửa đổi cuối
cùng:
10/2025
Mô tả - Hỗ trợ tra cứu nhanh đơn vị tổ chức bằng cách nhập mã hoặc tên.
- Cán bộ nhập từ khóa vào ô tìm kiếm (mã hoặc tên đơn vị).
- Hệ thống thực hiện truy vấn trên bảng OrganizationUnit (Bảng thông tin các
đơn vị) và hiển thị kết quả khớp.
Tác nhân - Cán bộ Phòng Tổ chức.
- Quản trị viên hệ thống..
- Người dùng có quyền “Xem cơ cấu tổ chức”
22
Tiền điều
kiện
1. Người dùng đã đăng nhập hệ thống.
2. Có quyền truy cập module “Cơ cấu tổ chức”.
3. Hệ thống có sẵn dữ liệu đơn vị.
Hậu điều
kiện
1. Hệ thống hiển thị danh sách đơn vị phù hợp với tiêu chí tìm kiếm.
2. Người dùng có thể chọn đơn vị trong danh sách để xem chi tiết hoặc chỉnh
sửa.
Luồng
chính
1. Người dùng mở chức năng Cơ cấu tổ chức → Tìm kiếm đơn vị.
2. Hệ thống hiển thị thanh tìm kiếm và bộ lọc gồm các tiêu chí:
- Mã đơn vị.
- Tên đơn vị.
- Loại đơn vị (Khoa, Phòng, Bộ môn, Trung tâm…).
- Đơn vị cha.
3. Người dùng nhập từ khóa hoặc chọn tiêu chí lọc.
4. Người dùng nhấn nút Tìm kiếm hoặc Enter.
5. Hệ thống gửi yêu cầu truy vấn dữ liệu đến server.
6. Server thực hiện truy vấn trong cơ sở dữ liệu theo tiêu chí tìm kiếm.
7. Hệ thống hiển thị danh sách kết quả (mã, tên, loại, đơn vị cha, trạng thái).
8. Người dùng có thể chọn một kết quả để xem chi tiết hoặc thực hiện thao tác
khác (Sửa, Xóa, Thêm mới).
9. Use Case kết thúc.
Luồng
phụ
- Bước 3: Người dùng không nhập tiêu chí tìm kiếm.
→ Hệ thống hiển thị thông báo “Vui lòng nhập ít nhất một tiêu chí tìm kiếm.”
- Bước 6: Không tìm thấy dữ liệu phù hợp.
→ Hệ thống hiển thị thông báo “Không có kết quả phù hợp với từ khóa.”
- Bước 5: Lỗi kết nối hoặc truy vấn cơ sở dữ liệu.
→ Hệ thống hiển thị thông báo “Không thể thực hiện tìm kiếm, vui lòng thử
lại sau.”
Ngoại lệ 1. Người dùng không có quyền xem hoặc tìm kiếm đơn vị.
→ Hiển thị thông báo “Bạn không có quyền thực hiện thao tác này.”
2. Lỗi hệ thống (timeout, server error)
→ Hiển thị thông báo lỗi chung và ghi log.
Yêu cầu 1. Hệ thống hỗ trợ tìm kiếm không phân biệt chữ hoa/thường và có thể gợi ý
theo ký tự nhập.
2. Tốc độ phản hồi khi tìm kiếm ≤ 2 giây đối với dữ liệu ≤ 1000 bản ghi.
3. Cho phép tìm kiếm kết hợp nhiều tiêu chí (mã + loại + đơn vị cha).
4. Ghi log thao tác tìm kiếm (người dùng, từ khóa, thời gian).
Dữ liệu sử
dụng
- Bảng OrganizationUnit (Bảng thông tin các đơn vị).
- Use Case UC1.6 – Xem sơ đồ cơ cấu tổ chức
Tên Use case Xem sơ đồ cơ cấu tổ chức
Được tạo bởi: Phòng Tổ chức Cập nhật lần cuối
bởi:
Cán bộ phụ trách hệ
thống
Ngày tạo: Ngày sửa đổi cuối
cùng:
10/2025
Mô tả - Cung cấp cái nhìn trực quan về cơ cấu tổ chức của trường (các cấp quản lý,
mối quan hệ giữa các đơn vị).
23
- Chức năng cho phép người dùng xem toàn bộ cơ cấu tổ chức của nhà trường
dưới dạng sơ đồ cây. Các đơn vị được hiển thị theo cấp bậc từ trên xuống:
Trường → Khoa → Bộ môn/Phòng ban → Tổ/Đơn vị trực thuộc.
- Người dùng có thể mở rộng/thu gọn các nhánh, nhấp vào từng đơn vị để
xem thông tin chi tiết (mã, tên, mô tả, trưởng đơn vị, số lượng nhân sự).
- Hệ thống hỗ trợ xuất sơ đồ ra hình ảnh hoặc PDF.
Tác nhân - Quản trị viên.
- Cán bộ Phòng Tổ chức.
- Ban giám hiệu.
Tiền điều
kiện
1. Người dùng đã đăng nhập vào hệ thống.
2. Người dùng có quyền truy cập thông tin cơ cấu tổ chức.
3. Dữ liệu các đơn vị đã tồn tại trong cơ sở dữ liệu.
Hậu điều
kiện
1. Hệ thống hiển thị đầy đủ thông tin chi tiết của đơn vị được chọn.
2. Người dùng có thể thực hiện các hành động khác như: quay lại danh sách,
chỉnh sửa hoặc xóa (nếu có quyền).
Luồng
chính
1. Hệ thống hiển thị danh sách các đơn vị cơ cấu tổ chức hiện có.
2. Người dùng chọn một đơn vị muốn xem chi tiết.
3. Hệ thống nhận yêu cầu và truy xuất thông tin chi tiết từ cơ sở dữ liệu.
4. Hệ thống hiển thị thông tin chi tiết bao gồm:
- Mã đơn vị.
- Tên đơn vị.
- Loại đơn vị (Khoa, Phòng, Bộ môn, Trung tâm, …).
- Đơn vị cha (nếu có).
- Người phụ trách / Trưởng đơn vị.
- Ngày thành lập.
- Mô tả chức năng, nhiệm vụ.
- Trạng thái hoạt động.
5. Người dùng xem thông tin chi tiết.
6. Người dùng có thể chọn “Quay lại danh sách” hoặc “Chỉnh sửa đơn vị”
(nếu có quyền).
7. Use case kết thúc.
Luồng
phụ
- Bước 2. Nếu người dùng không chọn đơn vị nào mà nhấn “Xem chi tiết”.
→ Hệ thống hiển thị thông báo: “Vui lòng chọn một đơn vị để xem thông tin
chi tiết.”
- Bước 3: Nếu hệ thống không tìm thấy dữ liệu của đơn vị (do bị xóa hoặc lỗi
cơ sở dữ liệu).
→ Hệ thống thông báo: “Không tìm thấy thông tin chi tiết của đơn vị.”
Ngoại lệ 1. Mất kết nối với cơ sở dữ liệu.
→ Hệ thống hiển thị thông báo lỗi “Không thể tải dữ liệu. Vui lòng thử lại
sau.”
2. Người dùng hết phiên đăng nhập (session timeout).
→ Hệ thống yêu cầu đăng nhập lại.
Yêu cầu 1. Dữ liệu hiển thị phải được truy xuất theo mã đơn vị duy nhất.
2. Thông tin hiển thị phải đồng bộ và chính xác theo dữ liệu trong cơ sở dữ
liệu trung tâm.
3. Chức năng chỉ khả dụng với người dùng có quyền “Xem thông tin cơ cấu tổ
chức.”
Bảng dữ
liệu
- Bảng OrganizationUnit (Bảng thông tin các đơn vị)
→ Chứa thông tin về các đơn vị tổ chức, quan hệ phân cấp giữa các đơn vị.
- Bảng UserAccount (Bảng thông tin về người dùng/ nhân sự)
24
→ Dùng để xác định trưởng đơn vị hoặc số lượng nhân sự thuộc đơn vị.
- Đối tượng dữ liệu
ID Tên đối tượng dữ liệu Mô tả
DO1 OrganizationUnit Thông tin về các đơn vị trong cơ cấu tổ chức
DO1.1 UserAccount Thông tin nhân sự thuộc từng đơn vị tổ chức,
phục vụ xác định trưởng đơn vị hoặc danh sách
nhân sự.
DO1.2 UnitHierarchy Lưu quan hệ phân cấp giữa các đơn vị (đơn vị
cha – đơn vị con).
DO1.3 ContactInfo Lưu thông tin liên hệ chính thức của từng đơn vị
như số điện thoại, email, địa chỉ.
- Mô tả chi tiết đối tượng dữ liệu
+ Bảng OrganizationUnit
ID Data Field Description Unique Data Type Length Required
DO1
-01
OrganizationUnit
ID
Mã đơn vị Y Alphanumeric 10 Y
DO1
-02
OrganizationUnit
Name
Tên đơn vị N Text 100 Y
DO1
-03
OrganizationUnit
Type
Loại đơn vị
(Trường,
Khoa, Bộ
môn, Phòng
ban)
N Text 30 Y
DO1
-04
ParentUnitID Mã đơn vị
cha (nếu có)
N Alphanumeric 10 N
DO1
-05
Description Mô tả thêm N Text 255 N
DO1
-06
HeadOfUnit Mã nhân sự
là trưởng đơn
vị (liên kết
với bảng
UserAccount
).
N Alphanumeric 10 N
DO1
-07
PhoneNumber Số điện thoại
liên hệ của
đơn vị.
N Alphanumeric 50 N
DO1
-08
Email Địa chỉ email
chính thức
của đơn vị.
N Text 100 Y
DO1
-09
Active Trạng thái
hoạt động
của đơn vị:
“Hoạt động”
hoặc “Không
hoạt động”.
N Text 15 Y
25
DO1
-10
CreatedDate Ngày tạo bản
ghi đơn vị.
N DateTime - Y
DO1
-11
UpdatedDate Ngày chỉnh
sửa gần nhất.
N DateTime - N
+ Bảng UserAccount
ID Data Field Description Unique Data Type Length Required
DO1.1
-01
UserAccountID Mã nhân sự
(giảng viên,
cán bộ, nhân
viên)
Y Alphanumeri
c
10 Y
DO1.1
-02
FullName Họ và tên
nhân sự
N Text 100 Y
DO1.1
-03
Position Chức vụ
(Trưởng khoa,
Giảng viên,
Nhân viên,...)
N Text 50 N
DO1.1
-04
Degree Học vị / Trình
độ
N Text 50 N
DO1.1
-05
OrganizationUn
itID
Mã đơn vị
công tác (liên
kết bảng
Organization
Unit)
N Alphanumeri
c
10 Y
DO1.1
-06
Email Địa chỉ email
công việc
Y Text 100 Y
DO1.1
-07
PhoneNumber Số điện thoại
liên hệ
N Text 20 N
DO1.1
-08
Active Trạng thái
công tác
(“Đang làm
việc” / “Nghỉ
việc”)
N Text 20 Y
DO1.1
-09
CreatedDate Ngày tạo hồ
sơ nhân sự
N DateTime - N
DO1.1
-10
UpdatedDate Ngày cập nhật
gần nhất
N DateTime - N
+ Bảng UnitHierarchy
ID Data Field Description Unique Data Type Length Required
DO1.2-
01
ParentUnitID Mã đơn vị cha N Alphanumeric 10 Y
DO1.2-
02
ChildUnitID Mã đơn vị con N Alphanumeric 10 Y
26
DO1.2-
03
EffectiveDate Ngày bắt đầu
hiệu lực mối
quan hệ
N Date - N
DO1.2-
04
Note Ghi chú thêm N Text 255 N
+ Bảng ContactInfo
ID Data Field Description Unique Data Type Length Required
DO1.3
-01
OrganizationUn
itID
Mã đơn vị
(liên kết với
Organization
Unit)
Y Alphanumeric 10 Y
DO1.3
-02
Phone Số điện thoại
liên hệ
N Text 50 N
DO1.3
-03
Email Email chính
thức của đơn
vị
N Text 100 N
DO1.3
-04
Address Địa chỉ liên
hệ
N Text 255 N
4.3. Đặc tả và xây dựng giao diện nhóm UC2 – Quản lý người dùng/ nhân sự.
 Mô tả tổng quan
Use Case này mô tả quy trình quản trị viên (Admin) thực hiện việc quản lý tài khoản
người dùng trong hệ thống. Chức năng này bao gồm: tạo mới, cập nhật, khóa/mở khóa, phân
quyền và xóa tài khoản người dùng.
- Mục tiêu là đảm bảo mỗi cá nhân trong tổ chức có tài khoản truy cập phù hợp với vai trò và
trách nhiệm của họ, đồng thời đảm bảo an toàn, bảo mật cho toàn bộ hệ thống.
- Hệ thống cho phép người quản trị:
+ Tạo mới tài khoản người dùng với các thông tin cơ bản như tên đăng nhập, mật khẩu, họ
tên, đơn vị, email và vai trò.
+ Cập nhật thông tin người dùng khi có thay đổi (chuyển đơn vị, thay đổi vai trò hoặc cập
nhật thông tin cá nhân).
+ Khóa hoặc mở khóa tài khoản khi phát hiện hành vi bất thường hoặc khi nhân sự nghỉ việc.
+ Xóa tài khoản người dùng không còn sử dụng.
+ Tìm kiếm, lọc và xem danh sách người dùng theo tên, mã, vai trò, hoặc đơn vị trực thuộc.
- Trong quá trình thao tác, hệ thống kiểm tra và đảm bảo:
+ Tên đăng nhập là duy nhất, không trùng với tài khoản đã tồn tại.
+ Mật khẩu đáp ứng quy định bảo mật (độ dài tối thiểu, ký tự đặc biệt, v.v.).
27
+ Thông tin liên hệ (email, số điện thoại) hợp lệ.
+ Ràng buộc dữ liệu khi xóa (không cho phép xóa nếu tài khoản còn gắn với dữ liệu hoạt
động).
- Kết quả của Use case 2 là danh sách người dùng được cập nhật chính xác và bảo mật truy
cập hệ thống được đảm bảo, tạo nền tảng cho các module khác (phân quyền, nhật ký hoạt
động, quản lý đơn vị, v.v.) vận hành ổn định và an toàn.
- Mức độ ưu tiên: Cao
- Mục tiêu chính: Đảm bảo việc quản lý người dùng trong hệ thống minh bạch, bảo mật và có
thể kiểm soát được quyền truy cập, từ đó hỗ trợ vận hành hệ thống an toàn và hiệu quả.
 Các chức năng chính
Mã UC Tên Use Case Mô tả Tác nhân
UC2.1 Thêm nhân sự Nhập thông tin nhân viên, giảng viên
mới.
Cán bộ Phòng Tổ
chức
UC2.2 Cập nhật nhân sự Sửa thông tin nhân viên, giảng viên. Cán bộ Phòng Tổ
chức
UC2.3 Gán vai trò / phân
quyền người dùng
Cán bộ Phòng Tổ
chức
UC2.4 Xóa nhân sự Xóa hồ sơ khi không còn sử dụng. Cán bộ Phòng Tổ
chức
UC2.5 Xem danh sách
nhân sự
Hiển thị toàn bộ danh sách người
dùng.
Cán bộ, Trưởng
khoa
UC2.6 Tìm kiếm nhân sự Tìm nhân sự theo tên, mã hoặc khoa. Cán bộ Phòng Tổ
chức
 Đặc tả Use Case
- Use Case UC2.1 – Thêm nhân sự
Tên Use case Thêm nhân sự
Được tạo bởi: Phòng Tổ chức Cập nhật lần cuối
bởi:
Cán bộ phụ trách hệ
thống
Ngày tạo: Ngày sửa đổi cuối
cùng:
10/2025
Mô tả - Cán bộ Phòng Tổ chức truy cập vào chức năng “Thêm nhân sự” để tạo hồ sơ
cho cán bộ mới.
- Cho phép tạo mới tài khoản người dùng (giảng viên, sinh viên, cán bộ) với
thông tin cơ bản và vai trò hệ thống.
- Hệ thống kiểm tra mã nhân sự có trùng không, đồng thời kiểm tra định dạng
email, số điện thoại trước khi lưu.
Tác nhân - Quản trị viên hệ thống.
- Cán bộ Phòng Tổ chức.
Tiền điều
kiện
1. Người dùng đã đăng nhập và có quyền quản lý người dùng.
2. Cấu trúc đơn vị (Trường, Khoa, Bộ môn) đã được khai báo.
Hậu điều
kiện
1. Hồ sơ nhân sự mới được lưu thành công vào cơ sở dữ liệu.
2. Tài khoản đăng nhập được tạo và kích hoạt qua email (nếu có cấu hình).
3. Danh sách người dùng được cập nhật hiển thị trên giao diện.
28
Luồng
chính
1. Cán bộ chọn chức năng “Thêm nhân sự” trong module Quản lý người
dùng/ nhân sự.
2. Hệ thống hiển thị form nhập thông tin nhân sự gồm:
- Họ tên.
- Mã định danh (Mã GV / MSSV / Mã cán bộ).
- Đơn vị (Khoa / Bộ môn).
- Email, số điện thoại.
- Vai trò hệ thống (Giảng viên / Sinh viên / Cán bộ / Quản trị viên).
3. Cán bộ nhập thông tin vào form.
4. Hệ thống kiểm tra tính hợp lệ:
- Các trường bắt buộc không để trống.
- Mã định danh không trùng.
- Email và số điện thoại đúng định dạng.
5. Nếu hợp lệ, người dùng nhấn “Lưu”.
6. Hệ thống tạo tài khoản mới, lưu vào cơ sở dữ liệu và gửi email kích hoạt.
7. Hệ thống hiển thị thông báo “Thêm nhân sự thành công”.
8. Use Case kết thúc.
Luồng
phụ
- Bước 4a: Nếu mã định danh bị trùng.
→ Hệ thống hiển thị cảnh báo:“Mã người dùng đã tồn tại trong hệ thống.”
→ Người dùng quay lại chỉnh sửa mã khác.
- Bước 4b: Nếu dữ liệu thiếu hoặc sai định dạng.
→ Hệ thống hiển thị lỗi chi tiết từng trường, ví dụ:“Email không hợp lệ” hoặc
“Số điện thoại phải có 10 chữ số.”
- Bước 6a: Nếu gửi email kích hoạt thất bại → Hệ thống vẫn lưu dữ liệu
nhưng hiển thị cảnh báo:“Tài khoản đã được tạo nhưng chưa gửi được email
kích hoạt.”
Ngoại lệ 1. Mất kết nối cơ sở dữ liệu.
→ Hệ thống thông báo lỗi: “Không thể lưu thông tin, vui lòng thử lại.”
2. Phiên đăng nhập hết hạn.
→ Hệ thống yêu cầu đăng nhập lại.
Yêu cầu 1. Dữ liệu nhân sự phải lưu đúng chuẩn và đồng bộ với cơ sở dữ liệu trung
tâm (bảng UserAccount – Bảng thông tin về người dùng/ nhân sự).
2. Mỗi mã nhân sự phải là duy nhất trong toàn hệ thống.
3. Tài khoản được tạo phải liên kết chính xác với đơn vị (UnitID từ bảng
OrganizationUnit – bảng thông tin các đơn vị).
4. Email kích hoạt chỉ được gửi nếu hệ thống SMTP được cấu hình thành
công.
Dữ liệu sử
dụng
- Bảng UserAccount (Bảng thông tin về người dùng/ nhân sự).
- Liên kết UnitID (từ bảng OrganizationUnit – Bảng thông tin các đơn vị).
29
- Use Case UC2.2 – Cập nhật nhân sự
Tên Use case Cập nhật nhân sự
Được tạo bởi: Phòng Tổ chức Cập nhật lần cuối
bởi:
Cán bộ phụ trách hệ
thống
Ngày tạo: Ngày sửa đổi cuối
cùng:
10/2025
Mô tả - Cán bộ Phòng Tổ chức hoặc Quản trị viên truy cập vào chức năng “Cập nhật
nhân sự” để chỉnh sửa thông tin hồ sơ cán bộ, giảng viên hoặc sinh viên khi
có thay đổi (đơn vị công tác, chức vụ, học vị, liên hệ, v.v.).
- Cho phép cập nhật trực tiếp trên giao diện hồ sơ nhân sự, kiểm tra dữ liệu
đầu vào và lưu thay đổi vào cơ sở dữ liệu.
- Mọi cập nhật đều được ghi nhận vào nhật ký hệ thống (audit log) để theo dõi
thay đổi.
Tác nhân - Quản trị viên.
- Cán bộ Phòng Tổ chức.
Tiền điều
kiện
1. Người dùng đã đăng nhập hợp lệ vào hệ thống.
2. Nhân sự cần cập nhật đã tồn tại trong cơ sở dữ liệu.
3. Người dùng có quyền chỉnh sửa thông tin nhân sự (được phân quyền trong
hệ thống).
Hậu điều
kiện
1. Thông tin nhân sự được cập nhật và lưu thành công vào cơ sở dữ liệu.
2. Lịch sử thay đổi được ghi vào nhật ký hệ thống (LogHistory).
3. Dữ liệu hiển thị trên danh sách nhân sự được tự động cập nhật.
Luồng
chính
1. Người dùng mở chức năng “Quản lý nhân sự” → “Cập nhật nhân sự”.
2. Hệ thống hiển thị danh sách nhân sự hiện có.
3. Người dùng chọn một nhân sự cần chỉnh sửa.
4. Hệ thống truy xuất thông tin chi tiết của nhân sự từ cơ sở dữ liệu.
5. Người dùng chỉnh sửa các thông tin cần thiết, bao gồm:
- Họ tên.
- Đơn vị công tác (Khoa/Bộ môn).
- Chức vụ / Học vị.
- Email, số điện thoại.
- Trạng thái làm việc (Đang công tác / Nghỉ việc).
6. Người dùng nhấn “Lưu thay đổi”.
30
7. Hệ thống kiểm tra tính hợp lệ của dữ liệu (bắt buộc, định dạng, trùng lặp).
8. Nếu hợp lệ, hệ thống ghi dữ liệu cập nhật vào cơ sở dữ liệu, đồng thời lưu
log thay đổi.
9. Hệ thống hiển thị thông báo “Cập nhật thông tin nhân sự thành công”.
10. Use Case kết thúc.
Luồng
phụ
- Bước 4a: Nhân sự không tồn tại: Nếu nhân sự bị xóa hoặc mã không hợp lệ.
→ Hệ thống hiển thị thông báo “Không tìm thấy nhân sự.”
- Bước 7a: Dữ liệu sai định dạng: Nếu nhập email sai định dạng hoặc bỏ trống
trường bắt buộc.
→ Hệ thống hiển thị “Vui lòng kiểm tra lại dữ liệu nhập.”
- Bước 8a: Xung đột dữ liệu: Nếu thông tin trùng với một hồ sơ khác.
→ Hệ thống hiển thị “Mã hoặc email đã tồn tại trong hệ thống.”
Ngoại lệ 1. Mất kết nối mạng/ cơ sở dữ liệu: Hệ thống không thể kết nối đến máy chủ.
→ Hiển thị “Không thể kết nối đến hệ thống, vui lòng thử lại.”
2. Lỗi ghi dữ liệu: Khi ghi dữ liệu vào cơ sở dữ liệu thất bại.
→ Hệ thống rollback và hiển thị “Cập nhật thất bại, vui lòng thử lại sau.”
3. Hết phiên đăng nhập: Nếu người dùng bị timeout → Hệ thống yêu cầu đăng
nhập lại trước khi lưu.
Yêu cầu 1. Thời gian cập nhật dữ liệu không vượt quá 3 giây kể từ khi nhấn “Lưu”.
2. Tất cả thay đổi phải được ghi vào bảng lịch sử chỉnh sửa (AuditLog).
3. Trường dữ liệu phải được kiểm tra định dạng và tính duy nhất trước khi
ghi.
4. Giao diện hỗ trợ xác nhận trước khi lưu (“Bạn có chắc muốn lưu thay đổi
không?”).
5. Hệ thống phải đảm bảo tính toàn vẹn dữ liệu giữa bảng UserAccount (Bảng
thông tin về người dùng/ nhân sự) và bảng OrganizationUnit (Bảng thông tin
các đơn vị).
Dữ liệu sử
dụng
- Bảng UserAccount (Bảng thông tin về người dùng/ nhân sự).
31
- Use Case UC2.3 - Gán vai trò / phân quyền người dùng
Tên Use case Gán vai trò / phân quyền người dùng
Được tạo bởi: Phòng Tổ chức Cập nhật lần cuối
bởi:
Cán bộ phụ trách hệ
thống
Ngày tạo: Ngày sửa đổi cuối
cùng:
10/2025
Mô tả - Cho phép cán bộ Phòng Tổ chức hoặc quản trị viên gán vai trò hệ thống cho
người dùng hiện có (Sinh viên, Giảng viên, Cán bộ, Quản trị viên).
- Việc phân quyền được thực hiện thông qua giao diện danh sách người dùng,
mỗi người có thể được gán một hoặc nhiều vai trò tùy theo phân hệ.
- Thay đổi quyền có hiệu lực khi người dùng đăng nhập lại hệ thống.
Tác nhân - Quản trị viên hệ thống.
- Cán bộ Phòng Tổ chức.
Tiền điều
kiện
1. Người dùng đã tồn tại trong hệ thống (bảng UserAccount- Bảng thông tin
về người dùng/ nhân sự).
2. Người thực hiện thao tác có quyền quản lý người dùng / phân quyền.
Hậu điều
kiện
1. Thông tin vai trò của người dùng được cập nhật thành công trong cơ sở dữ
liệu.
32
2. Quyền truy cập mới sẽ có hiệu lực từ lần đăng nhập tiếp theo.
3. Thông tin thay đổi được ghi vào nhật ký hệ thống (Audit Log - bảng lịch sử
chỉnh sửa).
Luồng
chính
1. Quản trị viên mở chức năng “Phân quyền người dùng” từ menu quản lý hệ
thống.
2. Hệ thống hiển thị danh sách người dùng hiện có, bao gồm họ tên, mã định
danh, đơn vị và vai trò hiện tại.
3. Quản trị viên chọn một hoặc nhiều người dùng cần gán quyền.
4. Quản trị viên chọn vai trò hệ thống
- Sinh viên.
- Giảng viên.
- Cán bộ.
- Quản trị viên.
5. Nhấn “Lưu” để xác nhận thay đổi.
6. Hệ thống hiển thị cảnh báo xác nhận nếu người dùng đã có vai trò trước đó.
7. Hệ thống ghi thông tin vai trò mới vào cơ sở dữ liệu (bảng
RoleAssignment – bảng phân công vai trò).
8. Ghi log thao tác thay đổi quyền.
9. Hệ thống hiển thị thông báo “Cập nhật phân quyền thành công.”
10. Use Case kết thúc.
Luồng
phụ
- Bước 3a: Người dùng đã có vai trò hiện tại:
+ Hệ thống hiển thị cảnh báo “Vai trò hiện tại sẽ bị thay thế. Bạn có muốn
tiếp tục không?”
+ Nếu người dùng chọn “Có”, hệ thống tiếp tục theo bước 5.
+ Nếu chọn “Không”, hệ thống quay lại màn hình danh sách.
- Bước 7a: Lỗi khi ghi cơ sở dữ liệu: Nếu quá trình ghi vai trò vào cơ sở dữ
liệu thất bại.
→ Hiển thị “Không thể lưu phân quyền. Vui lòng thử lại sau.”
Ngoại lệ 1. Mất kết nối hệ thống: Không thể truy cập cơ sở dữ liệu
→ Hệ thống thông báo “Kết nối bị gián đoạn.”
2. Phiên làm việc hết hạn: Người dùng bị đăng xuất
→ Yêu cầu đăng nhập lại trước khi thực hiện thao tác.
3. Thiếu quyền hệ thống: Nếu tài khoản không có quyền “Quản lý người
dùng”
→ Hệ thống chặn thao tác và hiển thị “Bạn không có quyền thực hiện chức
năng này.”
Yêu cầu 1. Tất cả thay đổi quyền phải được ghi lại trong bảng AuditLog - bảng lịch sử
chỉnh sửa (người thực hiện, thời gian, vai trò mới).
2. Hệ thống phải hỗ trợ gán nhiều vai trò cho một người dùng nếu cấu hình
cho phép.
3. Việc cập nhật quyền không ảnh hưởng đến các phiên đăng nhập đang hoạt
động — chỉ áp dụng khi đăng nhập mới.
4. Thời gian cập nhật quyền không vượt quá 3 giây cho mỗi người dùng.
5. Giao diện phải cho phép lọc, tìm kiếm người dùng theo tên, mã định danh,
hoặc đơn vị.
Dữ liệu sử
dụng
- Bảng UserAccount: Bảng thông tin người dùng/ nhân sự.
- Bảng RoleAssignment: Bảng phân công vai trò.
- Bảng AuditLog: Bảng lịch sử chỉnh sửa .
33
- Use Case UC2.4 – Xóa người dùng
Tên Use case Xóa người dùng
Được tạo bởi: Phòng Tổ chức Cập nhật lần cuối
bởi:
Cán bộ phụ trách hệ
thống
Ngày tạo: Ngày sửa đổi cuối
cùng:
10/2025
Mô tả - Cho phép cán bộ Phòng Tổ chức xóa người dùng khỏi hệ thống khi người đó
nghỉ việc, chuyển công tác hoặc không còn thuộc tổ chức.
- Trước khi xóa, hệ thống kiểm tra các ràng buộc dữ liệu (ví dụ: nhân sự có
gắn với học phần, chương trình đào tạo hoặc lớp học).
- Nếu không còn liên kết, hồ sơ được xóa vĩnh viễn hoặc đánh dấu trạng thái
“Đã nghỉ”.
Tác nhân - Quản trị viên.
- Cán bộ Phòng Tổ chức.
Tiền điều
kiện
1. Người dùng đã đăng nhập hợp lệ vào hệ thống.
2. Người cần xóa đang tồn tại trong cơ sở dữ liệu.
3. Người thực hiện (Cán bộ Phòng Tổ chức) có quyền xóa nhân sự trong hệ
thống.
4. Nhân sự cần xóa không còn liên kết với học phần, chương trình đào tạo
hoặc dữ liệu hoạt động khác.
Hậu điều
kiện
1. Hồ sơ người dùng được xóa khỏi cơ sở dữ liệu hoặc cập nhật trạng thái “Đã
nghỉ”.
2. Thông tin thao tác được ghi nhận vào nhật ký hệ thống (log: thời gian,
người thực hiện, kết quả).
3. Giao diện được cập nhật, không còn hiển thị người dùng đã xóa trong danh
sách.
Luồng
chính
1. Cán bộ Phòng Tổ chức đăng nhập và mở chức năng Quản lý người dùng →
Xóa người dùng.
2. Hệ thống hiển thị danh sách nhân sự hiện có.
3. Cán bộ chọn nhân sự cần xóa.
4. Hệ thống hiển thị hộp thoại xác nhận xóa với cảnh báo.
5. Cán bộ xác nhận “Đồng ý xóa”.
6. Hệ thống kiểm tra ràng buộc dữ liệu liên quan (học phần, chương trình đào
tạo, lớp, điểm…).
7. Nếu hợp lệ, hệ thống xóa hoặc chuyển trạng thái nhân sự thành “Ngưng
hoạt động”.
8. Hệ thống hiển thị thông báo “Xóa thành công”.
9. Use case kết thúc.
Luồng
phụ
- Bước 4a: Người dùng chọn “Hủy” khi xác nhận xóa.
→ Hệ thống hủy thao tác, quay lại danh sách nhân sự.
- Bước 6a: Dữ liệu liên kết chưa được kiểm tra đầy đủ.
→ Hệ thống thông báo “Không thể xóa do dữ liệu liên kết chưa xác định” và
yêu cầu kiểm tra lại.
Ngoại lệ 1. Nhân sự đang được sử dụng trong học phần / chương trình đào tạo / điểm
→ Hệ thống hiển thị thông báo: “Không thể xóa vì người dùng đang được sử
dụng trong hệ thống.”
2. Nhân sự không tồn tại hoặc đã bị xóa.
→ Hệ thống hiển thị: “Không tìm thấy nhân sự cần xóa.”
3. Lỗi kết nối cơ sở dữ liệu.
34
→ Hệ thống hiển thị: “Không thể thực hiện thao tác. Vui lòng thử lại sau.”
Yêu cầu 1. Cho phép tìm kiếm và chọn người dùng cần xóa.
2. Kiểm tra toàn bộ ràng buộc dữ liệu trước khi xóa.
3. Hỗ trợ xóa mềm (soft delete) hoặc xóa cứng (hard delete) tùy chính sách.
4. Thời gian xử lý thao tác xóa ≤ 3 giây.
5. Ghi log đầy đủ thông tin thao tác (user, thời gian, hành động).
6. Giao diện hiển thị thông báo lỗi rõ ràng, dễ hiểu.
Dữ liệu sử
dụng
- Bảng UserAccount: Bảng thông tin về người dùng/ nhân sự
- Use Case UC2.5 – Xem danh sách người dùng
Tên Use case Xem danh sách người dùng
Được tạo bởi: Phòng Tổ chức Cập nhật lần cuối
bởi:
Cán bộ phụ trách hệ
thống
Ngày tạo: Ngày sửa đổi cuối
cùng:
10/2025
Mô tả - Hiển thị danh sách toàn bộ người dùng trong hệ thống, cho phép lọc theo
đơn vị, chức vụ, học vị, trạng thái công tác.
- Người dùng có thể xem danh sách nhân sự toàn trường hoặc lọc theo đơn vị
cụ thể.
- Dữ liệu hiển thị dưới dạng bảng có thể sắp xếp và phân trang.
Tác nhân - Quản trị viên.
- Cán bộ Phòng Tổ chức.
- Trưởng khoa.
Tiền điều
kiện
1. Hệ thống đã có dữ liệu người dùng.
2. Người dùng đã đăng nhập và có quyền xem danh sách.
Hậu điều
kiện
1. Danh sách người dùng hiển thị chính xác theo điều kiện lọc.
2. Người dùng có thể xuất danh sách dưới dạng file (Excel, PDF).
Luồng
chính
1. Người dùng đăng nhập vào hệ thống.
2. Từ menu chính, chọn mục “Danh sách người dùng”.
3. Hệ thống hiển thị bảng danh sách người dùng gồm các cột:
- Mã.
- Họ tên.
- Vai trò.
- Đơn vị.
- Chức vụ.
- Trạng thái.
4. Người dùng có thể lọc theo vai trò, đơn vị hoặc trạng thái công tác.
5. Người dùng có thể sắp xếp danh sách theo từng cột (ví dụ: theo họ tên hoặc
đơn vị).
6. Người dùng chọn nút “Xuất file” để tải danh sách ra Excel hoặc PDF.
7. Hệ thống xử lý, tải về tệp tương ứng.
8. Use case kết thúc.
Luồng
phụ
- Bước 3a: Nếu người dùng chọn bộ lọc nhưng không có dữ liệu phù hợp.
→ Hệ thống hiển thị thông báo “Không tìm thấy dữ liệu phù hợp.”
- Bước 6a: Nếu người dùng chọn xuất file nhưng trình duyệt chặn tải về.
→ Hiển thị thông báo hướng dẫn bật quyền tải tệp.
Ngoại lệ 1. Mất kết nối cơ sở dữ liệu.
35
→ Hệ thống hiển thị lỗi “Không thể tải dữ liệu, vui lòng thử lại sau.”
2. Phiên đăng nhập hết hạn.
→ Chuyển hướng về màn hình đăng nhập.
3. Người dùng không có quyền xem danh sách.
→ Hiển thị thông báo “Bạn không có quyền truy cập chức năng này.”
Yêu cầu 1. Hệ thống phải hiển thị danh sách người dùng với đầy đủ các cột thông tin.
2. Hệ thống cho phép lọc, tìm kiếm theo vai trò, đơn vị, trạng thái.
3. Hệ thống cho phép sắp xếp dữ liệu theo từng cột.
4. Hệ thống cho phép xuất dữ liệu ra định dạng Excel hoặc PDF.
5. Hệ thống chỉ hiển thị dữ liệu theo phạm vi quyền của người dùng đăng
nhập.
6. Thời gian tải danh sách không vượt quá 3 giây cho 1000 bản ghi.
7. Dữ liệu phải được hiển thị có phân trang, mặc định 20 bản ghi/trang.
8. Giao diện tương thích với màn hình laptop và thiết bị di động.
9. Xuất file phải đảm bảo đúng định dạng và tiếng Việt có dấu.
Dữ liệu sử
dụng
- Bảng UserAccount: Bảng thông tin về người dùng/ nhân sự.
- Use Case UC2.6 – Tìm kiếm người dùng
Tên Use case Tìm kiếm người dùng
Được tạo bởi: Phòng Tổ chức Cập nhật lần cuối
bởi:
Cán bộ phụ trách hệ
thống
Ngày tạo: Ngày sửa đổi cuối
cùng:
10/2025
Mô tả - Tìm kiếm nhanh nhân sự theo mã, họ tên, đơn vị hoặc chức vụ.
- Cán bộ nhập từ khóa tìm kiếm vào ô “Tìm người dùng”.
- Hệ thống trả về danh sách phù hợp.
Tác nhân - Quản trị viên.
- Cán bộ Phòng Tổ chức.
Tiền điều
kiện
1. Người dùng đã đăng nhập hợp lệ vào hệ thống.
2. Hệ thống có dữ liệu người dùng trong bảng UserAccount – bảng thông tin
về người dùng/ nhân sự.
36
Hậu điều
kiện
1. Kết quả tìm kiếm được hiển thị chính xác theo từ khóa nhập.
2. Nếu không có kết quả, hệ thống hiển thị thông báo phù hợp.
Luồng
chính
1. Người dùng đăng nhập vào hệ thống.
2. Truy cập chức năng “Tìm kiếm người dùng” trên giao diện.
3. Nhập từ khóa tìm kiếm:
+ Mã nhân sự.
+ Họ tên.
+ Đơn vị.
+ Chức vụ.
4. Hệ thống truy vấn cơ sở dữ liệu để tìm các bản ghi phù hợp.
5. Hệ thống hiển thị danh sách kết quả tìm được kèm thông tin cơ bản:
- Mã.
- Họ tên.
- Đơn vị.
- Vai trò.
- Trạng thái.
6. Use Case kết thúc.
Luồng
phụ
- Bước 4a: Nếu không có bản ghi nào phù hợp.
→ Hệ thống hiển thị thông báo “Không tìm thấy kết quả phù hợp.”
Ngoại lệ 1. Kết nối cơ sở dữ liệu bị lỗi.
→ Hiển thị thông báo “Không thể truy cập dữ liệu, vui lòng thử lại.”
2. Phiên đăng nhập hết hạn.
→ Hệ thống yêu cầu người dùng đăng nhập lại.
3. Từ khóa chứa ký tự đặc biệt không hợp lệ.
→ Thông báo “Từ khóa tìm kiếm không hợp lệ.”
Yêu cầu 1. Hệ thống cho phép nhập từ khóa tìm kiếm là mã, họ tên, đơn vị hoặc chức
vụ.
2. Hệ thống phải trả về danh sách kết quả phù hợp với từ khóa nhập.
3. Hệ thống hỗ trợ tìm kiếm không phân biệt hoa/thường.
4. Hệ thống hiển thị tối đa 20 kết quả mỗi trang, có phân trang.
5. Thời gian phản hồi cho mỗi truy vấn tìm kiếm không vượt quá 2 giây.
6. Giao diện tìm kiếm thân thiện, có gợi ý tự động khi nhập từ khóa
(autocomplete).
7. Đảm bảo bảo mật, người dùng chỉ tìm được thông tin trong phạm vi quyền
hạn của mình.
8. Hệ thống xử lý được tối thiểu 1000 bản ghi mà không bị treo hoặc chậm
đáng kể.
Dữ liệu sử
dụng
- Bảng UserAccount: bảng thông tin về người dùng/ nhân sự.
- Đối tượng dữ liệu
ID Tên đối tượng dữ liệu Mô tả
DO2 UserAccount Lưu thông tin nhân sự (giảng viên, cán bộ,
nhân viên, sinh viên) trong hệ thống, bao
gồm dữ liệu cá nhân, đơn vị công tác và
trạng thái làm việc.
DO2.1 UserAccountLog Lưu thông tin tài khoản đăng nhập hệ thống
của từng nhân sự.
37
DO2.2 Role Danh mục các vai trò trong hệ thống (Quản
trị viên, Giảng viên, Cán bộ, Sinh viên, v.v.).
DO2.3 RoleAssignment Liên kết giữa người dùng và vai trò tương
ứng trong hệ thống.
DO2.4 AuditLog Lưu nhật ký các thao tác thay đổi dữ liệu
người dùng, phục vụ kiểm tra và bảo mật.
- Mô tả đối dượng dữ liệu
+ Bảng UserAccount
ID Data Field Description Unique Data Type Length Required
DO2
-01
UserAccountI
D
Mã đơn vị Y Alphanumeric 10 Y
DO2
-02
FullName Tên đơn vị N Text 100 Y
DO2
-03
Gender Giới tính N Enumeration
(Nam/Nữ)
5 Y
DO2
-04
Position Chức vụ N Text 50 Y
DO2
-05
Degreen Học vị N Text 30 N
DO2
-06
OrganizationU
nitID
Đơn vị công
tác (Liên kết
đến
OrganizationU
nit)
N Alphanumeric 10 Y
DO2
-07
Email Email liên hệ Y Alphanumeric 100 N
DO2
-08
Phone Số điện thoại N Numeric 15 N
DO2
-09
Address Địa chỉ nơi làm
việc hoặc liên
hệ của nhân sự.
N Text 255 N
DO2
-10
Active Trạng thái
công tác (Đang
làm việc/Nghỉ
việc)
N Text 10 Y
DO2
-11
CreatedDate Ngày tạo hồ sơ N DateTime - Y
DO2
-12
UpdatedDate Ngày chỉnh
sửa gần nhất
N DateTime - N
+ Bảng UserAccount
ID Data Field Description Unique Data Type Length Required
DO2.1-
01
UserID Mã tài khoản
người dùng
Y Alphanumeric 10 Y
DO2.1-
02
Username Tên đăng
nhập hệ thống
Y Text 50 Y
38
DO2.1-
03
PasswordHash Mật khẩu
được mã hóa
N Text 255 Y
DO2.1-
04
UserAccountID Mã nhân sự
liên kết (liên
kết với bảng
UserAccount)
N Alphanumeric 10 Y
DO2.1-
05
IsActive Trạng thái tài
khoản (Kích
hoạt / Khóa)
N Boolean - Y
DO2.1-
06
LastLogin Lần đăng
nhập gần nhất
N DateTime - N
DO2.1-
07
CreatedDate Ngày tạo tài
khoản
N DateTime - Y
DO2.1-
08
UpdatedDate Ngày cập nhật
gần nhất
N DateTime - N
+ Bảng Role
ID Data Field Description Unique Data Type Length Required
DO2.2-
01
RoleID Mã vai trò Y Alphanumeric 10 Y
DO2.2-
02
RoleName Tên vai trò
(Admin,
Lecturer,
Student, Officer,
…)
Y Text 50 Y
DO2.2-
03
Description Mô tả chức năng
hoặc phạm vi
quyền hạn
N Text 255 N
+ Bảng RoleAssignment
ID Data Field Description Unique Data Type Length Required
DO2.3-
01
AssignmentID Mã phân
quyền
Y Alphanumeric 10 Y
DO2.3-
02
UserID Mã tài khoản
người dùng
N Alphanumeric 10 Y
DO2.3-
03
RoleID Mã vai trò
được gán
N Alphanumeric 10 Y
DO2.3-
04
UserAccountID Người thực
hiện gán
quyền
(UserID)
N Alphanumeric 10 Y
DO2.3-
05
AssignedDate Ngày gán vai
trò
N DateTime - Y
39
+ Bảng AuditLog
ID Data Field Description Unique Data Type Length Required
DO2.4-
01
LogID Mã nhật ký thao
tác
Y Alphanumeric 15 Y
DO2.4-
02
UserID Người thực hiện
thao tác
N Alphanumeric 10 Y
DO2.4-
03
Action Hành động thực
hiện (Thêm,
Sửa, Xóa, Phân
quyền,…)
N Text 50 Y
DO2.4-
04
ObjectName Tên bảng hoặc
đối tượng bị tác
động
(UserAccount,
Role, …)
N Text 50 Y
DO2.4-
05
ObjectID Mã bản ghi bị
tác động
N Alphanumeric 10 N
DO2.4-
06
ActionTime Thời gian thực
hiện thao tác
N DateTime - Y
DO2.4-
07
Description Ghi chú chi tiết
về thay đổi
N Text 255 N
4.4. Đặc tả và xây dựng giao diện nhóm UC3 – Quản lý học phần
 Mô tả tổng quan
Use Case này mô tả quy trình người quản trị học vụ hoặc cán bộ đào tạo thực hiện việc
quản lý thông tin học phần trong hệ thống.
Chức năng này bao gồm các thao tác: thêm mới, chỉnh sửa, tra cứu, và xóa học phần.
Mục tiêu của UC3 là giúp hệ thống duy trì danh sách học phần đầy đủ, chính xác và nhất
quán, phục vụ cho các chức năng đăng ký học, quản lý lớp học phần, và thống kê học vụ.
- Hệ thống cho phép người dùng có quyền:
+ Thêm mới học phần với các thông tin cơ bản như mã học phần, tên học phần, số tín chỉ, số
tiết lý thuyết – thực hành, khoa quản lý, và mô tả ngắn.
+ Cập nhật thông tin học phần khi có thay đổi về tên, nội dung, hoặc số tín chỉ.
+ Xóa học phần nếu chưa được gắn với lớp học phần hoặc dữ liệu đăng ký của sinh viên.
+ Tìm kiếm học phần theo mã, tên, hoặc khoa quản lý.
- Hệ thống thực hiện kiểm tra hợp lệ dữ liệu trước khi ghi nhận, bao gồm:
+ Mã học phần là duy nhất, không trùng lặp với học phần khác.
+ Số tín chỉ phải là số nguyên dương.
+ Không cho phép xóa học phần nếu đã được sử dụng trong đăng ký hoặc phân công giảng
dạy.
40
- Kết quả của UC3 là danh sách học phần được cập nhật chính xác, đảm bảo cho việc quản lý
đào tạo, đăng ký học, và thống kê tín chỉ hoạt động đúng theo quy định của nhà trường.
- Mức độ ưu tiên: Cao
- Mục tiêu chính: Đảm bảo hệ thống lưu trữ và quản lý danh mục học phần đầy đủ, chính xác,
dễ tra cứu, và có thể mở rộng linh hoạt khi chương trình đào tạo thay đổi.
 Các chức năng chính
- Danh sách Use Case
Mã UC Tên Use Case Mô tả Tác nhân
UC3.1 Thêm học phần
mới
Cho phép người quản trị hoặc cán bộ
đào tạo thêm mới thông tin học phần
vào hệ thống.
Cán bộ phòng
đào tạo
UC3.2 Cập nhật thông
tin học phần
Cho phép chỉnh sửa thông tin học
phần đã tồn tại (tên, tín chỉ, mô tả,
khoa quản lý…).
Cán bộ phòng
đào tạo
UC3.3 Xóa học phần Cho phép xóa học phần khỏi hệ thống
(khi chưa được gán vào chương trình
đào tạo hoặc khối kiến thức).
Cán bộ phòng
đào tạo
UC3.4 Tìm kiếm học
phần
Cho phép người dùng tìm kiếm học
phần theo mã, tên, hoặc khoa quản lý.
Cán bộ phòng
đào tạo
UC3.5 Xem danh sách
học phần
Hiển thị danh sách toàn bộ học phần
trong hệ thống, có thể lọc theo khoa,
khối kiến thức hoặc trạng thái.
Cán bộ phòng
đào tạo
UC3.6 Xem chi tiết học
phần
Hiển thị đầy đủ thông tin của một học
phần cụ thể, bao gồm tín chỉ, học
phần tiên quyết, song hành, và mô tả.
Cán bộ phòng
đào tạo
 Đặc tả Use Case
- Use Case UC3.1 – Thêm học phần mới
Tên Use case Thêm học phần mới
Được tạo bởi: Phòng Đào tạo Cập nhật lần cuối
bởi:
Cán bộ phụ trách hệ
thống
Ngày tạo: Ngày sửa đổi cuối
cùng:
10/2025
Mô tả - Cán bộ phòng đào tạo thêm mới thông tin học phần vào hệ thống, bao gồm:
mã học phần, tên học phần, số tín chỉ, số tín chỉ lý thuyết – thực hành, khoa
quản lý, học phần tiên quyết/song hành, và mô tả nội dung.
- Hệ thống kiểm tra dữ liệu đầu vào, đảm bảo mã học phần không trùng, sau
đó lưu vào cơ sở dữ liệu.
Tác nhân Cán bộ Phòng Đào tạo
Tiền điều
kiện
1. Người dùng đã đăng nhập hệ thống.
2. Có quyền “Quản lý học phần”.
3. Danh sách các đơn vị (khoa quản lý) và khối kiến thức đã được khai báo
trong hệ thống.
41
Hậu điều
kiện
1. Học phần mới được lưu thành công vào bảng Course (bảng học phần).
2. Danh sách học phần hiển thị học phần vừa thêm.
3. Ghi log thao tác thêm mới.
Luồng
chính
1. Người dùng chọn menu “Quản lý học phần → Thêm mới”.
2. Hệ thống hiển thị form nhập thông tin học phần, bao gồm:
- Mã học phần.
- Tên học phần.
- Số tín chỉ: Lý thuyết (LT) – Thực hành (TH).
- Khoa quản lý.
- Học phần tiên quyết / song hành.
- Mô tả nội dung.
3. Người dùng nhập thông tin và nhấn “Lưu”.
4. Hệ thống kiểm tra tính hợp lệ:
- Không để trống các trường bắt buộc.
- Mã học phần chưa tồn tại trong hệ thống.
- Số tín chỉ hợp lệ (≥1).
5. Nếu hợp lệ, hệ thống lưu dữ liệu vào cơ sở dữ liệu (bảng Course) và cập
nhật danh sách.
6. Hệ thống hiển thị thông báo “Thêm học phần thành công”.
7. Use Case kết thúc.
Luồng
phụ
- Bước 4a: Nếu mã học phần trùng.
→ Hiển thị thông báo “Mã học phần đã tồn tại.” và yêu cầu nhập lại.
- Bước 4b. Nếu thiếu thông tin bắt buộc.
→ Hiển thị thông báo “Vui lòng nhập đầy đủ thông tin bắt buộc.”.
- Bước 4c: Nếu nhập sai định dạng (ví dụ: số tín chỉ không hợp lệ).
→ Hiển thị lỗi chi tiết từng trường.
Ngoại lệ 1. Mất kết nối cơ sở dữ liệu..
→ Thông báo “Không thể lưu học phần, vui lòng thử lại sau.”
2. Phiên đăng nhập hết hạn.
→ Hệ thống yêu cầu người dùng đăng nhập lại.
3. Lỗi quyền truy cập.
→ Hiển thị “Bạn không có quyền thêm học phần.”
Yêu cầu 1. Hệ thống cho phép thêm mới học phần với đầy đủ thông tin bắt buộc.
2. Kiểm tra trùng mã học phần trước khi lưu.
3. Hệ thống ghi log thao tác thêm học phần.
4. Cập nhật danh sách học phần sau khi thêm.
5. Thời gian xử lý thêm học phần không vượt quá 3 giây.
6. Giao diện trực quan, dễ sử dụng với thông báo rõ ràng.
7. Bảo mật thông tin học phần – chỉ người có quyền mới được thao tác.
8. Hỗ trợ tối đa 10.000 học phần mà không giảm hiệu năng.
Dữ liệu sử
dụng
- Bảng Course: bảng học phần.
42
- Use Case UC3.2 – Cập nhật thông tin học phần mới
Tên Use case Cập nhật thông tin học phần mới
Được tạo bởi: Phòng Đào tạo Cập nhật lần cuối
bởi:
Cán bộ phụ trách hệ
thống
Ngày tạo: Ngày sửa đổi cuối
cùng:
10/2025
Mô tả - Cán bộ Phòng Đào tạo có thể chỉnh sửa thông tin của học phần đã có trong
hệ thống, bao gồm các thuộc tính như: tên học phần, số tín chỉ, số tín chỉ lý
thuyết/thực hành, học phần tiên quyết hoặc song hành, mô tả học phần, trạng
thái hoạt động...
- Sau khi chỉnh sửa, hệ thống cập nhật thông tin và lưu lại lịch sử thay đổi.
Tác nhân Cán bộ Phòng Đào tạo
Tiền điều
kiện
1. Người dùng đã đăng nhập hệ thống.
2. Có quyền “Quản lý học phần”.
3. Học phần đã tồn tại trong hệ thống.
Hậu điều
kiện
1. Thông tin học phần được cập nhật thành công.
2. Danh sách học phần hiển thị dữ liệu mới nhất.
3. Hệ thống ghi lại lịch sử cập nhật (người cập nhật, thời gian, nội dung thay
đổi).
Luồng
chính
1. Người dùng chọn menu “Quản lý học phần” → “Danh sách học phần”.
2. Chọn học phần cần chỉnh sửa.
3. Nhấn nút “Chỉnh sửa”.
4. Nhập các thông tin cần thay đổi.
43
5. Nhấn “Lưu thay đổi”.
6. Hệ thống kiểm tra tính hợp lệ của dữ liệu.
7. Nếu hợp lệ → cập nhật dữ liệu vào bảng Course (bảng học phần) và lưu
lịch sử thay đổi.
8. Hiển thị thông báo “Cập nhật thành công”.
9. Use Case kết thúc.
Luồng
phụ
- Bước 4a: Nếu thông tin nhập thiếu hoặc không hợp lệ.
→ Hệ thống hiển thị thông báo lỗi và yêu cầu người dùng sửa lại.
- Bước 4b: Nếu người dùng không có quyền chỉnh sửa.
→ Hệ thống hiển thị thông báo “Bạn không có quyền thực hiện thao tác này”.
Ngoại lệ 1. Mất kết nối cơ sở dữ liệu.
→ Thông báo “Không thể cập nhật dữ liệu, vui lòng thử lại sau.”
2. Học phần bị xóa hoặc không tồn tại tại thời điểm chỉnh sửa.
→ Hệ thống hiển thị “Học phần không tồn tại.”
Yêu cầu 1. Thời gian phản hồi khi lưu thay đổi không vượt quá 5 giây.
2. Các trường dữ liệu phải được kiểm tra tính hợp lệ (mã học phần duy nhất,
số tín chỉ là số dương, mô tả không để trống).
3. Dữ liệu cập nhật được đồng bộ với các phân hệ khác như:
- Xây dựng chương trình đào tạo.
- Khối kiến thức.
- Khoa quản lý.
Dữ liệu sử
dụng
- Bảng Course (bảng học phần) – cập nhật trực tiếp.
- Use Case UC3.3 – Xóa học phần
Tên Use case Xóa học phần
Được tạo bởi: Phòng Tổ chức Cập nhật lần cuối
bởi:
Cán bộ phụ trách hệ
thống
Ngày tạo: Ngày sửa đổi cuối
cùng:
10/2025
Mô tả - Cho phép cán bộ phòng đào tạo xóa học phần khỏi hệ thống khi học phần
chưa được gán vào bất kỳ chương trình đào tạo hay khối kiến thức nào.
- Việc xóa đảm bảo không làm mất tính toàn vẹn dữ liệu liên quan.
Tác nhân Cán bộ Phòng Đào tạo
Tiền điều
kiện
1. Người dùng đã đăng nhập hệ thống.
2. Có quyền “Quản lý học phần”.
3. Học phần tồn tại trong hệ thống.
Hậu điều
kiện
1. Học phần được xóa khỏi cơ sở dữ liệu.
2. Danh sách học phần hiển thị kết quả cập nhật mới nhất.
3. Lưu nhật ký thao tác xóa (người xóa, thời gian xóa).
Luồng
chính
1. Người dùng chọn menu “Quản lý học phần → Danh sách học phần”.
2. Chọn học phần cần xóa.
3. Hệ thống kiểm tra ràng buộc dữ liệu (liên kết với chương trình đào tạo,
khối kiến thức, module…).
4. Nếu hợp lệ → hiển thị hộp thoại xác nhận “Bạn có chắc chắn muốn xóa học
phần này không?”.
5. Người dùng nhấn “Xác nhận xóa”.
6. Hệ thống thực hiện xóa học phần khỏi bảng Course.
44
7. Hiển thị thông báo “Đã xóa thành công.”
8. Use Case kết thúc.
Luồng
phụ
- Bước 2a: Nếu học phần có liên kết với chương trình đào tạo hoặc khối kiến
thức
→ Hệ thống hiển thị thông báo “Không thể xóa học phần đang được sử
dụng.”
- Bước 2b: Nếu người dùng không có quyền thao tác
→ Thông báo “Bạn không có quyền thực hiện chức năng này.”
Ngoại lệ 1. Mất kết nối cơ sở dữ liệu trong quá trình xóa.
→ Thông báo “Lỗi hệ thống, vui lòng thử lại sau.”
2. Học phần bị người khác xóa trước khi xác nhận.
→ Hệ thống thông báo “Học phần không còn tồn tại.”
Yêu cầu 1. Hệ thống phải xác minh ràng buộc toàn vẹn dữ liệu trước khi xóa.
2. Thời gian xử lý yêu cầu xóa không vượt quá 5 giây.
3. Thông tin xóa phải được ghi vào nhật ký hệ thống (Audit Log – bảng lịch
sử chỉnh sửa).
Dữ liệu sử
dụng
- Bảng Course: bảng học phần
- Use Case UC3.4 – Tìm kiếm học phần
Tên Use case Tìm kiếm học phần
Được tạo bởi: Phòng Đào tạo Cập nhật lần cuối
bởi:
Cán bộ phụ trách hệ
thống
Ngày tạo: Ngày sửa đổi cuối
cùng:
10/2025
Mô tả Cho phép cán bộ phòng đào tạo tra cứu nhanh học phần theo nhiều tiêu chí
như mã học phần, tên học phần, khoa quản lý hoặc trạng thái hoạt động. Chức
năng hỗ trợ lọc, sắp xếp và hiển thị kết quả để phục vụ công tác cập nhật hoặc
kiểm tra thông tin học phần.
Tác nhân Cán bộ Phòng Đào tạo
Tiền điều
kiện
1. Người dùng đã đăng nhập hệ thống.
2. Có quyền “Tra cứu học phần”.
3. Dữ liệu học phần đã tồn tại trong hệ thống.
Hậu điều
kiện
1. Hệ thống hiển thị danh sách học phần phù hợp với tiêu chí tìm kiếm.
2. Dữ liệu có thể được chọn để xem chi tiết hoặc chỉnh sửa (nếu có quyền).
Luồng
chính
1. Người dùng mở chức năng “Tìm kiếm học phần”.
2. Nhập các tiêu chí tìm kiếm.
- Mã học phần.
- Tên.
- Khoa quản lý.
- Trạng thái hoạt động.
3. Nhấn nút “Tìm kiếm”.
4. Hệ thống truy vấn cơ sở dữ liệu theo tiêu chí nhập.
5. Hiển thị danh sách kết quả tương ứng với các cột:
- Mã học phần.
- Tên học phần.
- Số tín chỉ.
- Khoa quản lý.
45
- Trạng thái.
6. Use Case kết thúc.
Luồng
phụ
- Bước 4a: Nếu không có kết quả phù hợp
→ Hệ thống hiển thị thông báo: “Không tìm thấy học phần phù hợp.”
- Bước 4b: Nếu người dùng nhập tiêu chí tìm kiếm không hợp lệ (ví dụ: ký tự
đặc biệt)
→ Hệ thống yêu cầu nhập lại.
Ngoại lệ 1. Mất kết nối cơ sở dữ liệu khi tìm kiếm
→ Thông báo “Lỗi hệ thống, vui lòng thử lại sau.”
2. Quá thời gian phản hồi truy vấn (>10s)
→ Hệ thống hiển thị “Tìm kiếm quá thời gian, vui lòng rút gọn tiêu chí.”
Yêu cầu 1. Thời gian trả kết quả tìm kiếm không vượt quá 5 giây.
2. Hỗ trợ tìm kiếm không phân biệt chữ hoa/thường.
3. Cho phép lọc kết quả nâng cao (theo tín chỉ, trạng thái hoạt động, khoa
quản lý).
4. Kết quả tìm kiếm có thể được xuất ra Excel/PDF để lưu trữ hoặc chia sẻ nội
bộ.
Dữ liệu sử
dụng
- Bảng Course (bảng Học phần)
- Bảng OrganizationUnit (bảng thông tin các đơn vị)
- Use Case UC3.5 – Xem danh sách học phần
Tên UC Xem danh sách học phần
Được tạo bởi: Phòng Đào tạo Cập nhật lần cuối
bởi:
Cán bộ phụ trách hệ
thống
Ngày tạo: Ngày sửa đổi cuối
cùng:
10/2025
Mô tả Cho phép cán bộ đào tạo xem toàn bộ danh sách học phần hiện có trong hệ
thống. Người dùng có thể lọc theo khoa quản lý, khối kiến thức, hoặc trạng
thái hoạt động (đang dùng / ngừng dùng). Danh sách hiển thị dưới dạng bảng
có thể sắp xếp, phân trang và xuất file Excel/PDF.
Tác nhân Cán bộ Phòng Đào tạo
Tiền điều
kiện
1. Người dùng đã đăng nhập hệ thống.
2. Có quyền truy cập chức năng “Quản lý học phần”.
3. Dữ liệu học phần tồn tại trong cơ sở dữ liệu.
Hậu điều
kiện
1. Danh sách học phần hiển thị chính xác theo điều kiện lọc.
2. Người dùng có thể chọn học phần để xem chi tiết hoặc chỉnh sửa (nếu có
quyền).
Luồng
chính
1. Người dùng chọn menu “Danh sách học phần”.
2. Hệ thống truy xuất dữ liệu từ bảng Course.
3. Hệ thống hiển thị danh sách học phần cùng các cột:
- Mã học phần.
- Tên học phần.
- Số tín chỉ.
- Khoa quản lý.
- Khối kiến thức.
- Trạng thái.
4. Người dùng có thể lọc theo khoa, khối kiến thức hoặc trạng thái hoạt động.
46
5. Có thể sắp xếp dữ liệu theo cột hoặc xuất danh sách ra file Excel/PDF.
6. Use Case kết thúc.
Luồng
phụ
- Bước 4a: Nếu không có học phần nào phù hợp với tiêu chí lọc
→ hiển thị thông báo “Không tìm thấy học phần phù hợp.”
- Bước 4b. Nếu kết nối cơ sở dữ liệu gián đoạn
→ hiển thị thông báo “Lỗi truy xuất dữ liệu, vui lòng thử lại sau.”
Ngoại lệ 1. Lỗi phân quyền: Nếu người dùng không có quyền “Xem danh sách học
phần” → hiển thị “Bạn không có quyền truy cập chức năng này.”
2. Lỗi dữ liệu trống: Nếu bảng Course không có bản ghi nào → hiển thị
“Chưa có học phần trong hệ thống.”
Yêu cầu 1. Lỗi phân quyền: Nếu người dùng không có quyền “Xem danh sách học
phần”
→ hiển thị “Bạn không có quyền truy cập chức năng này.”
2. Lỗi dữ liệu trống: Nếu bảng Course không có bản ghi nào
→ hiển thị “Chưa có học phần trong hệ thống.”
3. Dữ liệu danh sách học phần có thể được dùng làm đầu vào cho các chức
năng khác như “Xây dựng chương trình đào tạo”, “Phân bổ học phần vào khối
kiến thức”.
Dữ liệu sử
dụng
- Bảng Course,
- Bảng OrganizationUnit,
- Use Case UC3.6 – Xem chi tiết học phần
Tên UC Xem chi tiết học phần
Được tạo bởi: Phòng Đào tạo Cập nhật lần cuối
bởi:
Cán bộ phụ trách hệ
thống
Ngày tạo: Ngày sửa đổi cuối
cùng:
10/2025
Mô tả Cho phép cán bộ phòng đào tạo xem thông tin chi tiết của một học phần cụ
thể. Thông tin hiển thị bao gồm: mã học phần, tên học phần, số tín chỉ, số tiết
47
lý thuyết - thực hành, khoa quản lý, học phần tiên quyết/song hành, khối kiến
thức, mô tả nội dung và trạng thái hoạt động.
Tác nhân Cán bộ Phòng Đào tạo
Tiền điều
kiện
1. Người dùng đã đăng nhập và có quyền “Quản lý học phần”.
2. Học phần được chọn đã tồn tại trong cơ sở dữ liệu.
Hậu điều
kiện
1. Thông tin học phần được hiển thị đầy đủ, chính xác.
2. Người dùng có thể chọn thao tác khác: chỉnh sửa, xóa, hoặc quay lại danh
sách học phần.
Luồng
chính
1. Người dùng truy cập vào chức năng “Danh sách học phần”.
2. Chọn một học phần cần xem chi tiết.
3. Hệ thống gửi yêu cầu truy xuất dữ liệu học phần từ cơ sở dữ liệu.
4. Hệ thống hiển thị toàn bộ thông tin chi tiết của học phần bao gồm:
- Mã học phần.
- Tên học phần.
- Số tín chỉ: Lý thuyết (LT), Thực hành (TH).
- Khoa quản lý.
- Học phần tiên quyết / song hành.
- Mô tả nội dung.
- Trạng thái hoạt động.
- Ngày tạo, ngày cập nhật, người cập nhật.
5. Use Case kết thúc.
Luồng
phụ
- Bước 2a: Nếu học phần không tồn tại hoặc đã bị xóa.
→ Hiển thị thông báo “Không tìm thấy học phần.”
- Bước 4a: Nếu lỗi truy xuất dữ liệu.
→ Hiển thị “Không thể tải dữ liệu học phần, vui lòng thử lại.”
Ngoại lệ 1. Người dùng không có quyền xem chi tiết → hiển thị “Bạn không có quyền
truy cập chức năng này.”
2. Lỗi cơ sở dữ liệu hoặc lỗi mạng → hệ thống ghi log và hiển thị thông báo
lỗi kỹ thuật.
Yêu cầu 1. Thông tin học phần được hiển thị ở dạng giao diện chi tiết (read-only).
2. Hỗ trợ nút “Chỉnh sửa học phần” nếu người dùng có quyền.
3. Thời gian tải dữ liệu chi tiết không quá 3 giây.
4. Thông tin hiển thị đồng bộ với các bảng liên quan (Course,
OrganizationUnit, StandardKnowledgeModule).
Dữ liệu sử
dụng
- Bảng Course, liên kết OrganizationUnit (Khoa quản lý)
- Đối tượng dữ liệu
ID Tên đối tượng dữ liệu Mô tả
DO3 Course Lưu thông tin chi tiết về các học phần thuộc
chương trình đào tạo: mã học phần, tên, số tín chỉ,
mô tả, hình thức đánh giá, v.v.
DO3.1 CourseType Danh mục loại học phần (Bắt buộc, Tự chọn, Thực
tập, Đồ án, v.v.).
DO3.2 PrerequisiteCourse Thể hiện mối quan hệ tiên quyết giữa các học phần
(môn học A là điều kiện tiên quyết của môn học
B).
48
DO3.3 CourseInstructor Lưu thông tin về giảng viên phụ trách hoặc tham
gia giảng dạy học phần.
DO3.4 Syllabus Lưu trữ đề cương chi tiết học phần, bao gồm mục
tiêu, nội dung, phương pháp giảng dạy, và tiêu chí
đánh giá.
- Mô tả đối dượng dữ liệu
+ Bảng Course
ID Data Field Description Unique Data Type Length Required
DO3
-01
CourseID Mã học
phần
Y Alphanumeric 10 Y
DO3
-02
CourseName Tên học
phần
N Text 150 Y
DO3
-03
CourseTypeID Mã loại
học phần
(liên kết
bảng
CourseTyp
e)
N Alphanumeric 10 Y
DO3
-04
Credits Số tín chỉ
học phần
N Integer 2 Y
DO3
-05
LectureHours Số giờ lý
thuyết
N Integer 3 N
DO3
-06
PracticeHours Số giờ thực
hành
N Integer 3 N
DO3
-07
Description Mô tả nội
dung học
phần
N Text 255 N
DO3
-08
OrganizationU
nitID
Mã đơn vị
phụ trách
(liên kết
bảng
Organizatio
nUnit)
N Alphanumeric 10 Y
DO3
-09
Active Trạng thái
(“Đang áp
dụng”,
“Ngừng áp
dụng”)
N Text 20 Y
DO3
-10
CreatedDate Ngày tạo
học phần
N DateTime - Y
DO3
-11
UpdatedDate Ngày chỉnh
sửa gần
nhất
N DateTime - N
49
+ Bảng CourseType
ID Data Field Description Unique Data Type Length Required
DO3.1-
01
CourseTypeID Mã loại học
phần
Y Alphanumeric 10 Y
DO3.1-
02
CourseTypeName Tên loại học
phần (Bắt
buộc, Tự
chọn, Thực
tập, v.v.)
Y Text 50 Y
DO3.1-
03
Description Mô tả loại
học phần
N Text 255 N
+ Bảng PrerequisiteCourse
ID Data Field Description Unique Data Type Length Required
DO3.2-
01
PrereqID Mã quan hệ
tiên quyết
Y Alphanumeric 10 Y
DO3.2-
02
CourseID Mã học phần
chính
N Alphanumeric 10 Y
DO3.2-
03
PrereqCourseID Mã học phần
tiên quyết
N Alphanumeric 10 Y
DO3.2-
04
Note Ghi chú (ví
dụ: “Phải đạt
điểm ≥ 5.0”)
N Text 255 N
+ Bảng CourseInstructor
ID Data Field Description Unique Data Type Length Required
DO3.3
-01
CourseInstru
ctorID
Mã quan hệ
giảng viên –
học phần
Y Alphanumeric 10 Y
DO3.3
-02
CourseID Mã học phần N Alphanumeric 10 Y
DO3.3
-03
UserAccount
ID
Mã giảng viên
(liên kết bảng
UserAccount)
N Alphanumeric 10 Y
DO3.3
-04
Role Vai trò (Giảng
viên chính, Trợ
giảng, Hướng
dẫn viên)
N Text 50 N
DO3.3
-05
AssignedDat
e
Ngày phân
công giảng dạy
N Date - N
50
+ Bảng Syllabus
ID Data Field Description Unique Data Type Length Required
DO3.4-
01
SyllabusID Mã đề cương học
phần
Y Alphanumeric 10 Y
DO3.4-
02
CourseID Mã học phần liên
kết
N Alphanumeric 10 Y
DO3.4-
03
Objective Mục tiêu học
phần
N Text 500 N
DO3.4-
04
Content Nội dung tóm tắt N Text 1000 N
DO3.4-
05
Evaluation Phương pháp và
tỷ trọng đánh giá
N Text 255 N
DO3.4-
06
UpdatedBy Mã nhân sự cập
nhật đề cương
N Alphanumeric 10 N
DO3.4-
07
UpdatedDate Ngày cập nhật
gần nhất
N DateTime - N
4.5. Đặc tả và xây dựng giao diện nhóm UC4 – Quản lý khối kiến thức
 Mô tả tổng quan
Use Case này mô tả quy trình cán bộ đào tạo hoặc quản trị viên học vụ thực hiện việc
quản lý thông tin khối kiến thức trong hệ thống.
Khối kiến thức là tập hợp các học phần thuộc cùng một nhóm nội dung đào tạo (ví dụ: khối
kiến thức cơ sở ngành, chuyên ngành, đại cương…).
 Chức năng này cho phép người quản trị tạo mới, chỉnh sửa, xóa và tra cứu các khối kiến
thức, đồng thời gán các học phần tương ứng vào từng khối để phục vụ cho việc xây dựng
chương trình đào tạo.
- Hệ thống cho phép người dùng có quyền:
+ Tạo mới khối kiến thức, bao gồm: mã khối, tên khối, mô tả, khoa quản lý và danh sách học
phần thuộc khối.
+ Cập nhật thông tin khối kiến thức khi có thay đổi về cấu trúc hoặc học phần liên quan.
+ Xóa khối kiến thức nếu khối đó chưa được sử dụng trong chương trình đào tạo chính thức.
+ Tìm kiếm, lọc danh sách khối kiến thức theo mã, tên, hoặc khoa quản lý.
- Hệ thống đảm bảo:
+ Mã khối kiến thức là duy nhất, không trùng lặp.
+ Mỗi học phần chỉ được gán cho khối kiến thức phù hợp.
+ Không cho phép xóa khối kiến thức đang được sử dụng trong chương trình đào tạo hoặc có
học phần đang hoạt động.
+ Khi cập nhật danh sách học phần, hệ thống tự động đồng bộ sang các chương trình đào tạo
liên quan.
51
- Kết quả của UC4 là danh mục khối kiến thức được quản lý chính xác, có cấu trúc và liên kết
chặt chẽ với các học phần, hỗ trợ việc thiết kế và cập nhật chương trình đào tạo được thuận
tiện, nhất quán và dễ theo dõi.
- Mức độ ưu tiên: Cao
- Mục tiêu chính: Đảm bảo hệ thống quản lý các khối kiến thức trong chương trình đào tạo
một cách chính xác, dễ mở rộng và đồng bộ với danh mục học phần, tạo nền tảng cho việc
quản lý chương trình đào tạo và lập kế hoạch học tập của sinh viên.
 Các chức năng chính
Mã UC Tên Use Case Mô tả Tác nhân
UC4.1 Thêm khối kiến
thức
Thêm mới một khối kiến thức thuộc
chương trình đào tạo.
Cán bộ phòng
đào tạo
UC4.2 Cập nhật khối
kiến thức
Sửa đổi thông tin về khối kiến thức. Cán bộ phòng
đào tạo
UC4.3 Xóa khối kiến
thức
Xóa khối kiến thức không còn sử
dụng.
Cán bộ phòng
đào tạo
UC4.4 Xem danh sách
khối kiến thức
Hiển thị toàn bộ danh sách khối kiến
thức của các chương trình đào tạo.
Cán bộ phòng
đào tạo
UC4.5 Tìm kiếm khối
kiến thức
Tìm kiếm nhanh khối kiến thức theo
mã hoặc tên.
Cán bộ phòng
đào tạo
UC4.6 Gán học phần vào
khối kiến thức
Liên kết các học phần thuộc về một
khối kiến thức cụ thể.
Cán bộ phòng
đào tạo
 Đặc tả Use Case
- Use Case UC4.1 – Thêm khối kiến thức
Tên UC Thêm khối kiến thức
Được tạo bởi: Phòng Đào tạo Cập nhật lần cuối
bởi:
Cán bộ phụ trách hệ
thống
Ngày tạo: Ngày sửa đổi cuối
cùng:
10/2025
Mô tả - Tạo mới một khối kiến thức trong chương trình đào tạo (ví dụ: Khối kiến
thức đại cương, cơ sở ngành, chuyên ngành, tự chọn…).
- Cán bộ Phòng Đào tạo sử dụng chức năng này để thêm khối kiến thức mới.
Người dùng nhập các thông tin: mã khối, tên khối, mô tả, loại khối, số tín chỉ
tối thiểu, chương trình đào tạo thuộc về.
- Hệ thống kiểm tra dữ liệu, đảm bảo mã không trùng và lưu vào cơ sở dữ
liệu.
Tác nhân Cán bộ Phòng Đào tạo
Tiền điều
kiện
Người dùng đã đăng nhập và có quyền “Quản lý chương trình đào tạo”.
Hậu điều
kiện
1. Khối kiến thức mới được thêm thành công.
2. Dữ liệu được lưu vào cơ sở dữ liệu và hiển thị trong danh sách khối kiến
thức thuộc chương trình tương ứng.
Luồng
chính
1. Người dùng chọn menu “Quản lý khối kiến thức” → “Thêm mới”.
2. Hệ thống hiển thị biểu mẫu nhập thông tin khối kiến thức.
3. Người dùng nhập các thông tin:
52
- Mã khối kiến thức.
- Tên khối kiến thức.
- Loại khối (bắt buộc / tự chọn / chuyên ngành / đại cương…)
- Số tín chỉ tối thiểu.
- Mã chương trình đào tạo.
- Mô tả.
4. Người dùng nhấn “Lưu”.
5. Hệ thống kiểm tra dữ liệu:
- Nếu hợp lệ → lưu thông tin vào Bảng StandardKnowledgeModule (Bảng
khối kiến thức).
- Cập nhật danh sách hiển thị.
6. Use Case kết thúc.
Luồng
phụ
- Bước 3a: Nếu mã khối kiến thức đã tồn tại
→ Hiển thị thông báo: “Mã khối kiến thức bị trùng.”
- Bước 3b: Nếu thiếu trường bắt buộc
→ Hiển thị thông báo: “Vui lòng nhập đầy đủ thông tin bắt buộc.”
- Bước 3c: Nếu chương trình đào tạo không tồn tại hoặc không hợp lệ
→ Thông báo “Không tìm thấy chương trình đào tạo tương ứng.”
Ngoại lệ 1. Lỗi kết nối cơ sở dữ liệu
→ Hiển thị thông báo “Không thể kết nối máy chủ. Vui lòng thử lại sau.”
2. Hệ thống mất phản hồi khi lưu dữ liệu
→ Tự động hoàn tác thao tác và ghi log lỗi.
3. Người dùng mất quyền truy cập trong khi thao tác (ví dụ hết phiên đăng
nhập)
→ Hệ thống chuyển hướng đến trang đăng nhập.
Yêu cầu 1. Giao diện nhập liệu phải có xác thực theo thời gian thực (real-time
validation) cho các trường bắt buộc.
2. Mã khối kiến thức chỉ được phép gồm ký tự chữ và số, không có dấu cách
hoặc ký tự đặc biệt.
3. Hệ thống cần đảm bảo thời gian phản hồi cho thao tác lưu < 3 giây.
4. Chức năng phải tuân thủ quy tắc phân quyền người dùng của hệ thống
(Role-based Access Control).
5. Các thay đổi được ghi nhận vào log hệ thống để phục vụ kiểm tra sau này.
Dữ liệu sử
dụng
- Bảng StandardKnowledgeModule (bảng khối kiến thức) liên kết với bảng
EducationManagement (bảng chương trình đào tạo)
53
- Use Case UC4.2 – Cập nhật khối kiến thức
Tên UC Cập nhật khối kiến thức
Được tạo bởi: Phòng Đào tạo Cập nhật lần cuối
bởi:
Cán bộ phụ trách hệ
thống
Ngày tạo: Ngày sửa đổi cuối
cùng:
10/2025
Mục Nội dung
Tên UC Cập nhật khối kiến thức
Tác nhân Cán bộ Phòng Đào tạo
Mô tả - Cán bộ Phòng Đào tạo sử dụng chức năng này để chỉnh sửa thông tin của
một khối kiến thức đã tồn tại trong hệ thống.
- Khi có thay đổi (ví dụ: đổi tên, điều chỉnh số tín chỉ tối thiểu, thay đổi loại
khối, hoặc chuyển sang chương trình đào tạo khác), người dùng có thể cập
nhật thông tin tương ứng.
- Hệ thống kiểm tra tính hợp lệ, tránh trùng mã và đảm bảo tính toàn vẹn dữ
liệu trước khi lưu.
Tiền điều
kiện
1. Người dùng đã đăng nhập vào hệ thống.
2. Có quyền “Quản lý chương trình đào tạo”.
3. Khối kiến thức cần cập nhật đã tồn tại trong cơ sở dữ liệu.
Hậu điều
kiện
1. Thông tin khối kiến thức được cập nhật thành công.
2. Dữ liệu hiển thị được làm mới trong danh sách và phản ánh đúng nội dung
đã chỉnh sửa.
Luồng
chính
1. Người dùng mở “Danh sách khối kiến thức” và chọn khối cần chỉnh sửa.
2. Hệ thống hiển thị biểu mẫu thông tin hiện tại.
3. Người dùng chỉnh sửa các trường cần thay đổi
- Tên khối.
54
- Loại khối.
- Số tín chỉ tối thiểu.
- Chương trình đào tạo liên kết
- Mô tả.
4. Người dùng nhấn “Lưu”.
5. Hệ thống kiểm tra dữ liệu:
- Nếu hợp lệ → lưu thay đổi vào Bảng StandardKnowledgeModule ( Bảng
khối kiến thức).
- Hiển thị thông báo “Cập nhật thành công.”
6. Use Case kết thúc.
Luồng
phụ
- Bước 3a: Nếu mã khối bị thay đổi và trùng với mã khác.
→ Hiển thị “Mã khối kiến thức đã tồn tại.”
- Bước 3b. Nếu nhập sai định dạng số tín chỉ (không phải số hoặc nhỏ hơn 0)
→ Hiển thị “Số tín chỉ không hợp lệ.”
- Bước 3c: Nếu chọn chương trình đào tạo không tồn tại
→ Hiển thị “Không tìm thấy chương trình đào tạo.”
Ngoại lệ 1. Lỗi kết nối cơ sở dữ liệu.
→ Hiển thị “Không thể kết nối đến máy chủ. Vui lòng thử lại sau.”
2. Xung đột dữ liệu do người khác đang chỉnh sửa cùng lúc.
→ Hiển thị “Dữ liệu đang được cập nhật bởi người dùng khác.”
3. Hệ thống mất phản hồi hoặc gián đoạn trong quá trình lưu.
→ Thao tác bị hủy và log lỗi được ghi lại.
Yêu cầu 1. Giao diện cập nhật phải hiển thị dữ liệu hiện tại để người dùng dễ so sánh
và chỉnh sửa.
2. Tất cả các trường bắt buộc phải có kiểm tra hợp lệ (validation) trước khi
lưu.
3. Thời gian phản hồi cho thao tác lưu cập nhật không vượt quá 3 giây.
4. Các thay đổi phải được ghi nhận vào lịch sử chỉnh sửa (audit log) với thông
tin người thực hiện, thời gian, và nội dung thay đổi.
5. Chức năng phải tương thích với trình duyệt web hiện hành và giao diện đáp
ứng (responsive).
Dữ liệu sử
dụng
- Bảng StandardKnowledgeModule: bảng khối kiến thức.
- Bảng EducationManagement: bảng chương trình đào tạo,
- Use Case UC4.3 – Xóa khối kiến thức
Tên UC Xóa khối kiến thức
Được tạo bởi: Phòng Đào tạo Cập nhật lần cuối
bởi:
Cán bộ phụ trách hệ
thống
Ngày tạo: Ngày sửa đổi cuối
cùng:
10/2025
Mô tả - Cán bộ Phòng Đào tạo sử dụng chức năng này để xóa một khối kiến thức
không còn thuộc chương trình đào tạo hoặc không được sử dụng.
- Trước khi thực hiện, hệ thống kiểm tra ràng buộc dữ liệu với các bảng
Course (học phần) và Education Management (chương trình đào tạo).
- Nếu khối kiến thức đang được liên kết, hệ thống không cho phép xóa, đồng
thời thông báo cho người dùng biết lý do.
Tác nhân Cán bộ Phòng Đào tạo
55
Tiền điều
kiện
1. Người dùng đã đăng nhập hệ thống và có quyền “Quản lý chương trình đào
tạo”.
2. Khối kiến thức tồn tại trong cơ sở dữ liệu.
3. Không có học phần hoặc chương trình đào tạo nào đang liên kết với khối
kiến thức đó.
Hậu điều
kiện
1. Nếu xóa thành công → khối kiến thức bị xóa vĩnh viễn khỏi hệ thống hoặc
được cập nhật sang trạng thái “Ngừng sử dụng”.
2. Danh sách khối kiến thức được cập nhật hiển thị dữ liệu mới nhất.
Luồng
chính
1. Người dùng mở danh sách khối kiến thức.
2. Chọn khối cần xóa.
3. Nhấn nút “Xóa”.
4. Hệ thống hiển thị hộp thoại xác nhận.
5. Người dùng chọn “Đồng ý”.
6. Hệ thống kiểm tra ràng buộc dữ liệu:
- Nếu hợp lệ → xóa bản ghi khỏi Bảng StandardKnowledgeModule.
- Ghi log hành động xóa.
- Hiển thị thông báo “Đã xóa thành công.”
7. Use Case kết thúc.
Luồng
phụ
- Bước 3a. Nếu khối kiến thức có học phần liên kết.
→ Hiển thị “Không thể xóa vì đang có học phần liên kết.”
- Bước 3b: Nếu khối kiến thức thuộc chương trình đào tạo đang hoạt động
→ Hiển thị “Không thể xóa khối thuộc CTĐT đang sử dụng.”
- Bước 3c: Nếu người dùng hủy thao tác xác nhận
→ Quay lại danh sách, không thay đổi dữ liệu.
Ngoại lệ 1. Lỗi kết nối cơ sở dữ liệu.
→ Hiển thị “Không thể kết nối đến máy chủ, vui lòng thử lại.”
2. Xung đột truy cập (người khác đang chỉnh sửa/xóa cùng lúc).
→ Hiển thị “Dữ liệu đang được cập nhật bởi người dùng khác.”
3. Lỗi hệ thống trong quá trình xóa.
→ Log lỗi, hiển thị “Thao tác thất bại, vui lòng liên hệ quản trị hệ thống.”
Yêu cầu 1. Chức năng xóa chỉ hiển thị cho người dùng có quyền “Cán bộ quản lý
Chương trình đào tạo”.
2. Hệ thống phải yêu cầu xác nhận xóa 2 bước để tránh thao tác nhầm.
3. Thời gian xử lý xóa không vượt quá 3 giây.
4. Mọi thao tác xóa đều được ghi lại trong Audit Log, gồm: mã khối, người
thực hiện, thời gian, lý do (nếu có).
5. Giao diện cần hiển thị thông tin cảnh báo rõ ràng trước khi xóa, đặc biệt
nếu khối có ràng buộc.
Dữ liệu sử
dụng
- Bảng StandardKnowledgeModule, liên kết Course (bảng học phần).
- Bảng ModuleCourse (bảng liên kết giữa các khối kiến thức và các học phần
thuộc khối đó) – kiểm tra ràng buộc với chương trình đào tạo.
- Use Case UC4.4 – Xem danh sách khối kiến thức
Tên UC Xem danh sách khối kiến thức
Được tạo bởi: Phòng Đào tạo Cập nhật lần cuối
bởi:
Cán bộ phụ trách hệ
thống
Ngày tạo: Ngày sửa đổi cuối
cùng:
10/2025
56
Mô tả - Hiển thị danh sách toàn bộ khối kiến thức trong hệ thống.
- Người dùng có thể xem danh sách các khối kiến thức theo chương trình đào
tạo hoặc loại khối.
- Danh sách có thể được sắp xếp, lọc, và xuất ra file Excel/PDF.
Tác nhân Cán bộ Phòng Đào tạo
Tiền điều
kiện
1. Dữ liệu khối kiến thức đã tồn tại trong hệ thống.
2. Người dùng đã đăng nhập và có quyền truy cập chức năng.
Hậu điều
kiện
1. Danh sách khối kiến thức được hiển thị đầy đủ và chính xác.
2. Người dùng có thể tải danh sách về file Excel/PDF (nếu chọn).
Luồng
chính
1. Người dùng đăng nhập hệ thống và truy cập menu “Danh sách khối kiến
thức”.
2. Hệ thống truy xuất dữ liệu từ bảng Standard Knowledge Module.
3. Hệ thống hiển thị danh sách tất cả các khối kiến thức, bao gồm:
- Mã khối kiến thức
- Tên khối kiến thức
- Loại khối (Bắt buộc / Tự chọn)
- Chương trình đào tạo tương ứng
4. Người dùng có thể lọc danh sách theo chương trình đào tạo hoặc loại khối.
5. Hệ thống hiển thị danh sách kết quả sau khi lọc.
6. Người dùng có thể sắp xếp danh sách theo tên hoặc mã khối.
7. Người dùng có thể xuất dữ liệu ra định dạng Excel hoặc PDF.
8. Hệ thống xác nhận thao tác thành công và thông báo nếu cần.
9. Use Case kết thúc.
Luồng
phụ
- Bước 2a. Nếu không có dữ liệu khối kiến thức trong hệ thống:
→ Hệ thống hiển thị thông báo “Không có dữ liệu khối kiến thức”.
- Bước 4a: Nếu người dùng chọn điều kiện lọc không hợp lệ:
→ Hệ thống hiển thị thông báo lỗi và yêu cầu nhập lại.
Ngoại lệ 1. Mất kết nối cơ sở dữ liệu trong quá trình truy xuất.
2. Lỗi hệ thống khi tải dữ liệu hoặc xuất file.
3. Người dùng không có quyền truy cập vào chức năng này.
Yêu cầu 1. Giao diện hiển thị danh sách có hỗ trợ phân trang.
2. Tốc độ truy xuất dữ liệu ≤ 3 giây với 10.000 bản ghi.
3. Xuất file phải đúng định dạng, không sai lệch dữ liệu.
4. Tất cả các trường hiển thị phải tuân theo định dạng chuẩn của hệ thống (mã
khối, tên khối, loại, số lượng học phần,…).
Dữ liệu sử
dụng
- Bảng StandardKnowledgeModule.
57
- Use Case UC4.5 – Tìm kiếm khối kiến thức
Tên UC Tìm kiếm khối kiến thức
Được tạo bởi: Phòng Đào tạo Cập nhật lần cuối
bởi:
Cán bộ phụ trách hệ
thống
Ngày tạo: Ngày sửa đổi cuối
cùng:
10/2025
Mô tả - Cho phép người dùng tìm kiếm nhanh khối kiến thức theo mã hoặc tên khối
kiến thức.
- Người dùng nhập từ khóa vào ô tìm kiếm, hệ thống thực hiện truy vấn dữ
liệu và trả về danh sách khối kiến thức phù hợp.
Tác nhân Cán bộ Phòng Đào tạo
Tiền điều
kiện
1. Hệ thống có dữ liệu khối kiến thức trong cơ sở dữ liệu.
2. Người dùng đã đăng nhập vào hệ thống với quyền truy cập hợp lệ.
3. Chức năng tìm kiếm được kích hoạt và hoạt động bình thường.
Hậu điều
kiện
1. Danh sách kết quả tìm kiếm được hiển thị chính xác theo từ khóa nhập vào.
2. Người dùng có thể xem thông tin chi tiết của từng khối kiến thức nếu cần.
Luồng
chính
1. Người dùng mở chức năng “Tìm kiếm khối kiến thức” trên giao diện.
2. Người dùng nhập mã hoặc tên khối kiến thức vào ô tìm kiếm.
3. Hệ thống thực hiện truy vấn dữ liệu từ Bảng StandardKnowledgeModule
(Khối kiến thức).
4. Hệ thống hiển thị danh sách các khối kiến thức khớp với từ khóa.
5. Use case kết thúc.
Luồng
phụ
- Bước 4a: Nếu không có kết quả tìm kiếm:
→ Hệ thống hiển thị thông báo: “Không tìm thấy khối kiến thức phù hợp.”
→ Quay lại bước 2 của luồng chính để nhập lại từ khóa.
Ngoại lệ 1. Mất kết nối cơ sở dữ liệu trong quá trình truy vấn.
2. Người dùng nhập ký tự đặc biệt không hợp lệ.
3. Lỗi hệ thống khi xử lý câu truy vấn.
Yêu cầu 1. Hệ thống phải trả kết quả tìm kiếm trong vòng ≤ 2 giây.
2. Cho phép tìm kiếm không phân biệt chữ hoa – chữ thường.
3. Hỗ trợ tìm kiếm gần đúng (có thể hiển thị kết quả chứa từ khóa một phần).
4. Trường nhập liệu tìm kiếm giới hạn tối đa 100 ký tự.
58
Dữ liệu sử
dụng
- Bảng StandardKnowledgeModule.
- Use Case UC4.6 – Gán học phần vào khối kiến thức
Tên UC Gán học phần vào khối kiến thức
Được tạo bởi: Phòng Đào tạo Cập nhật lần cuối
bởi:
Cán bộ phụ trách hệ
thống
Ngày tạo: Ngày sửa đổi cuối
cùng:
10/2025
Mô tả - Liên kết các học phần cụ thể vào từng khối kiến thức trong chương trình đào
tạo.
- Cán bộ Phòng Đào tạo có thể chọn khối kiến thức và thêm danh sách học
phần thuộc về khối đó. Hệ thống lưu mối quan hệ giữa học phần và khối kiến
thức trong bảng liên kết (Bảng ModuleCourse).
Tác nhân Cán bộ Phòng Đào tạo
Tiền điều
kiện
1. Đã tồn tại dữ liệu học phần và khối kiến thức trong hệ thống.
2. Người dùng có quyền “Quản lý chương trình đào tạo”.
3. Cơ sở dữ liệu hoạt động bình thường.
Hậu điều
kiện
1. Các học phần được gán thành công vào khối kiến thức.
2. Quan hệ giữa học phần và khối được lưu trong bảng liên kết.
3. Thông tin cập nhật hiển thị trong danh sách học phần của khối.
Luồng
chính
1. Người dùng chọn menu “Gán học phần vào khối kiến thức”.
2. Hệ thống hiển thị danh sách các khối kiến thức.
3. Người dùng chọn một khối kiến thức cần gán học phần.
4. Hệ thống hiển thị danh sách các học phần khả dụng.
5. Người dùng đánh dấu chọn các học phần cần thêm.
6. Nhấn nút “Lưu”.
7. Hệ thống kiểm tra dữ liệu và lưu mối quan hệ vào bảng liên kết.
8. Hiển thị thông báo “Gán học phần thành công.”
9. Use case kết thúc.
Luồng
phụ
- Bước 5a: Nếu người dùng chưa chọn học phần nào:
→ Hệ thống hiển thị cảnh báo: “Chưa chọn học phần để gán.”
→ Quay lại bước 4 để chọn học phần.
- Bước 7a: Nếu học phần đã tồn tại trong khối:
→ Hệ thống thông báo: “Học phần này đã thuộc khối kiến thức.”
→ Bỏ qua học phần trùng, tiếp tục lưu phần còn lại.
Ngoại lệ 1. Lỗi kết nối cơ sở dữ liệu khi lưu mối quan hệ.
2. Dữ liệu khối hoặc học phần bị xóa trong quá trình thao tác.
3. Hệ thống bị gián đoạn khi đang thực hiện lưu dữ liệu.
Yêu cầu 1. Hệ thống phải hỗ trợ chọn nhiều học phần cùng lúc để gán.
2. Cho phép tìm kiếm học phần trong danh sách bằng từ khóa.
3. Thời gian xử lý thao tác gán không quá 3 giây.
4. Giao diện cần hỗ trợ hiển thị dạng danh sách cuộn với tối thiểu 100 học
phần.
Dữ liệu sử
dụng
- Bảng StandardKnowledgeModule.
- Bảng Course.
- Bảng ModuleCourse.
59
- Đối tượng dữ liệu
ID Tên đối tượng dữ liệu Mô tả
DO4 StandardKnowledgeModule Lưu thông tin chi tiết về khối kiến thức trong
chương trình đào tạo (phân nhóm các học phần
theo mục tiêu đào tạo).
DO4.1 KnowledgeType Danh mục loại khối kiến thức (Đại cương, Cơ
sở ngành, Chuyên ngành, Tốt nghiệp, v.v.).
DO4.2 ModuleCourse Liên kết giữa khối kiến thức và các học phần
thuộc khối đó.
DO4.3 EducationManagement Lưu thông tin chương trình đào tạo mà khối
kiến thức thuộc về.
DO4.4 Course Học phần được gắn vào khối kiến thức (tham
chiếu dữ liệu từ UC3 – Quản lý học phần).
- Mô tả đối tượng dữ liệu
+ StandardKnowledgeModule (Khối kiến thức).
ID Data Field Description Unique Data Type Length Required
DO4
-01
StandardKno
wledgeModul
eID
Mã khối kiến thức Y Alphanumeric 10 Y
DO4
-02
StandardKno
wledgeModul
eName
Tên khối kiến
thức (VD: Giáo
dục đại cương,
Cơ sở ngành,
v.v.)
N Text 100 Y
DO4
-03
KnowledgeT
ypeID
Mã loại khối kiến
thức (liên kết
KnowledgeType)
N Alphanumeric 10 N
DO4
-04
EducationMa
nagementID
Mã chương trình
đào tạo (liên kết
Program)
N Alphanumeric 10 Y
DO4
-05
RequiredCred
its
Số tín chỉ yêu cầu
trong khối
N Integer 3 Y
DO4
-06
Description Mô tả nội dung
khối kiến thức
N Text 255 N
DO4
-07
Note Ghi chú thêm N Text 255 N
DO4
-08
CreatedDate Ngày tạo bản ghi N DateTime - Y
DO4
-09
UpdatedDate Ngày chỉnh sửa
gần nhất
N DateTime - N
+ Bảng KnowledgeType
ID Data Field Description Unique Data Type Length Required
DO4.
1-01
KnowledgeT
ypeID
Mã loại khối kiến
thức
Y Alphanumeric 10 Y
60
DO4.
1-02
KnowledgeT
ypeName
Tên khối kiến
thức (VD: Giáo
dục đại cương,
Cơ sở ngành,
v.v.)
Y Text 50 Y
DO4.
1-03
Description Mô tả loại khối
kiến thức
N Text 255 N
+ Bảng ModuleCourse
ID Data Field Description Unique Data Type Length Required
DO4.
2-01
ModuleCoure
ID
Mã liên kết khối –
học phần
Y Alphanumeric 10 Y
DO4.
2-02
StandardKno
wledgeModul
eID
Mã khối kiến thức
(liên kết
KnowledgeBlock)
N Alphanumeric 10 Y
DO4.
2-03
CourseID Mã học phần (liên
kết Course)
N Alphanumeric 10 N
DO4.
2-04
CourseType Loại học phần
(Bắt buộc / Tự
chọn)
N Text 20 Y
DO4.
2-05
SemesterSug
gested
Học kỳ đề xuất
học học phần
N Integer 2 N
DO4.
2-06
Note Ghi chú thêm N Text 255 N
+ Bảng EducationManagement (Chương trình đào tạo)
ID Data Field Description Unique Data Type Length Required
DO4.3
-01
EducationMa
nagement ID
Mã chương
trình đào tạo
Y Alphanumeric 10 Y
DO4.3
-02
EducationMa
nagementNa
me
Tên chương
trình đào tạo
N Text 150 Y
DO4.3
-03
DegreeLevel Trình độ đào
tạo (ĐH, CĐ,
ThS…)
N Text 50 Y
DO4.3
-04
Organization
UnitID
Mã khoa/ đơn
vị quản lý
(liên kết
Organization
Unit)
N Alphanumeric 10 Y
DO4.3
-05
TotalCredits Tổng số tín
chỉ toàn
chương trình
N Integer 3 Y
DO4.3
-06
Active Trạng thái
(“Đang áp
dụng”,
N Text 20 Y
61
“Ngừng áp
dụng”)
+ Bảng Course (Học phần – Dữ liệu tham chiếu từ UC3 – Quản lý học phần)
ID Data Field Description Unique Data Type Length Required
DO4.4-
01
CourseID Mã học phần Y Alphanumeric 10 Y
DO4.4-
02
CourseName Tên học
phần
N Text 150 Y
DO4.4-
03
Credits Số tín chỉ N Integer 2 Y
DO4.4-
04
OrganizationU
nitID
Khoa phụ
trách học
phần
N Alphanumeric 10 Y
DO4.4-
05
Active Trạng thái
học phần
(“Đang áp
dụng”,
“Ngừng áp
dụng”)
N Text 20 Y
4.6. Đặc tả và xây dựng giao diện nhóm UC5 – Xây dựng chương trình đào tạo
 Mô tả tổng quan
Use Case này mô tả quy trình cán bộ đào tạo hoặc quản trị viên học vụ thực hiện việc xây
dựng và quản lý chương trình đào tạo trong hệ thống. Chức năng này cho phép tạo mới, chỉnh
sửa, xem chi tiết, sao chép hoặc xóa chương trình đào tạo cho từng ngành học, khóa học,
hoặc bậc đào tạo (đại học, cao học,…).
- Mục tiêu của Use case 5 là đảm bảo việc thiết kế, lưu trữ và cập nhật chương trình đào tạo
được thực hiện một cách thống nhất, đầy đủ và có khả năng liên kết với các khối kiến thức và
học phần đã được định nghĩa trong hệ thống.
- Hệ thống cho phép người dùng có quyền:
+ Tạo mới chương trình đào tạo, bao gồm thông tin cơ bản: mã chương trình, tên chương
trình, ngành học, khóa học, thời gian đào tạo, tổng số tín chỉ, và mô tả.
+ Gán các khối kiến thức và các học phần vào chương trình đào tạo.
+ Cập nhật thông tin chương trình đào tạo khi có thay đổi về cấu trúc, thời lượng, hoặc nội
dung.
+ Xóa chương trình đào tạo nếu chưa có sinh viên theo học hoặc chưa được triển khai chính
thức.
+ Tìm kiếm, sao chép và chỉnh sửa nhanh các chương trình tương tự giữa các khóa hoặc
ngành.
62
- Hệ thống đảm bảo:
+ Mã chương trình đào tạo là duy nhất trong phạm vi toàn hệ thống.
+ Mỗi chương trình đào tạo phải bao gồm ít nhất một khối kiến thức.
+ Không cho phép xóa chương trình đào tạo nếu đã có sinh viên đăng ký hoặc đã được sử
dụng trong kế hoạch học tập.
+ Khi sửa đổi cấu trúc hoặc học phần trong chương trình, hệ thống cập nhật tự động các liên
kết và ràng buộc tương ứng.
- Kết quả của Use case5 là chương trình đào tạo được xây dựng, lưu trữ và quản lý một cách
khoa học, đầy đủ và đồng bộ, làm nền tảng cho các hoạt động học vụ khác như đăng ký học
phần, phân công giảng dạy, và đánh giá kết quả học tập.
- Mức độ ưu tiên: Rất cao
- Mục tiêu chính: Hỗ trợ quá trình xây dựng và quản lý chương trình đào tạo một cách hiệu
quả, đảm bảo tính thống nhất, minh bạch và dễ dàng điều chỉnh khi có thay đổi trong khung
chương trình hoặc quy định đào tạo.
 Các chức năng chính
Mã UC Tên Use Case Mô tả Tác nhân
UC5.1 Tạo mới chương
trình đào tạo
Cho phép cán bộ phòng đào tạo khởi
tạo chương trình đào tạo mới, nhập
thông tin cơ bản (mã CTĐT, tên, thời
lượng, khoa quản lý…).
Cán bộ phòng
đào tạo
UC5.2 Cập nhật chương
trình đào tạo
Cho phép chỉnh sửa thông tin CTĐT
đã có (tên, mô tả, tổng tín chỉ, trạng
thái…).
Cán bộ phòng
đào tạo
UC5.3 Xóa chương trình
đào tạo
Cho phép xóa chương trình đào tạo
nếu chưa có khối kiến thức hoặc học
phần liên kết.
Cán bộ phòng
đào tạo
UC5.4 Gán khối kiến
thức vào CTĐT
Cho phép thêm hoặc xóa các khối
kiến thức thuộc chương trình đào tạo
cụ thể.
Cán bộ phòng
đào tạo
UC5.5 Xem chi tiết
chương trình đào
tạo
Hiển thị toàn bộ thông tin của chương
trình đào tạo, gồm danh sách khối
kiến thức và học phần.
Cán bộ phòng
đào tạo
UC5.6 Xuất chương trình
đào tạo
Cho phép xuất chương trình đào tạo
ra file Excel/PDF để lưu trữ hoặc gửi
phê duyệt.
Cán bộ phòng
đào tạo
UC5.7 Sao chép chương
trình đào tạo
Cán bộ phòng
đào tạo
UC5.8 Hiển thị chương
trình đào tạo sau
khi sao chép
Cán bộ phòng
đào tạo
63
 Đặc tả Use Case
- Use Case UC5.1 – Tạo mới chương trình đào tạo
Tên UC Tạo mới chương trình đào tạo
Được tạo bởi: Phòng Đào tạo Cập nhật lần cuối
bởi:
Cán bộ phụ trách hệ
thống
Ngày tạo: Ngày sửa đổi cuối
cùng:
10/2025
Mô tả - Cho phép Cán bộ Phòng Đào tạo tạo mới một chương trình đào tạo (CTĐT)
trong hệ thống.
- Người dùng nhập đầy đủ thông tin gồm: Mã CTĐT, Tên CTĐT, Trình độ
(Đại học/Thạc sĩ...), Thời gian đào tạo, Tổng số tín chỉ, Khoa quản lý, Mô tả.
- Hệ thống kiểm tra trùng mã và tính hợp lệ của dữ liệu, sau đó lưu thông tin
vào bảng Education Management và hiển thị trong danh sách các chương
trình đào tạo.
Tác nhân Cán bộ Phòng Đào tạo
Tiền điều
kiện
1. Người dùng đã đăng nhập hệ thống.
2. Người dùng có quyền “Quản lý chương trình đào tạo”.
3. Cơ sở dữ liệu hoạt động bình thường.
Hậu điều
kiện
1. CTĐT mới được tạo và lưu thành công trong hệ thống.
2. Dữ liệu được hiển thị trong danh sách CTĐT.
3. Mã CTĐT trở thành định danh duy nhất cho chương trình đó.
Luồng
chính
1. Người dùng chọn menu “Xây dựng CTĐT → Tạo mới”.
2. Hệ thống hiển thị form nhập thông tin chương trình đào tạo.
3. Người dùng nhập:
- Mã CTĐT.
- Tên CTĐT.
- Trình độ.
- Thời gian đào tạo.
- Tổng số tín chỉ.
- Khoa quản lý.
- Mô tả.
4. Người dùng nhấn “Lưu”.
5. Hệ thống kiểm tra dữ liệu hợp lệ (độ dài, trùng mã, định dạng số...).
6. Nếu hợp lệ, hệ thống lưu vào cơ sở dữ liệu (bảng Education Management)
và hiển thị thông báo “Tạo mới chương trình đào tạo thành công.”
7. Use case kết thúc.
Luồng
phụ
- Bước 3a: Nếu mã chương trình đào tạo trùng
→ Hiển thị “Mã chương trình đào tạo đã tồn tại.”
→ Quay lại bước 3 để nhập lại.
- Bước 3b: Nếu thiếu trường bắt buộc
→ Thông báo lỗi: “Vui lòng nhập đầy đủ thông tin bắt buộc.”
Ngoại lệ 1. Lỗi kết nối cơ sở dữ liệu → thông báo “Không thể lưu dữ liệu, vui lòng thử
lại sau.”
2. Lỗi session người dùng hết hạn → yêu cầu đăng nhập lại.
3. Mất kết nối trong quá trình lưu dữ liệu.
Yêu cầu 1. Hệ thống cần kiểm tra trùng mã CTĐT theo thời gian thực (real-time) khi
người dùng nhập.
2. Cho phép nhập mô tả dài tối đa 1000 ký tự.
64
3. Thời gian phản hồi khi lưu không vượt quá 5 giây.
4. Giao diện hỗ trợ chọn Khoa quản lý từ danh sách thả xuống (dropdown).
5. Cần lưu thông tin người tạo và thời gian tạo trong cơ sở dữ liệu.
Dữ liệu sử
dụng
- Bảng EducationManagement (chương trình đào tạo) liên kết
OrganizationUnit.
- Use Case UC5.2 – Cập nhật chương trình đào tạo
Tên UC Cập nhật chương trình đào tạo
Được tạo bởi: Phòng Đào tạo Cập nhật lần cuối
bởi:
Cán bộ phụ trách hệ
thống
Ngày tạo: Ngày sửa đổi cuối
cùng:
10/2025
Mô tả - Cho phép Cán bộ Phòng Đào tạo chỉnh sửa thông tin chi tiết của chương
trình đào tạo (CTĐT) đã tồn tại trong hệ thống.
- Người dùng có thể cập nhật các trường: Tên CTĐT, Mô tả, Tổng số tín chỉ,
Thời gian đào tạo, Trạng thái hoạt động (đang dùng/ngừng dùng).
- Hệ thống đảm bảo kiểm tra dữ liệu hợp lệ trước khi lưu và ghi nhận lịch sử
chỉnh sửa.
Tác nhân Cán bộ Phòng Đào tạo
Tiền điều
kiện
1. Người dùng đã đăng nhập vào hệ thống.
2. Chương trình đào tạo cần chỉnh sửa đã tồn tại trong cơ sở dữ liệu.
3. Người dùng có quyền “Quản lý chương trình đào tạo”.
Hậu điều
kiện
1. Thông tin CTĐT được cập nhật thành công trong hệ thống.
2. Danh sách CTĐT hiển thị thông tin mới nhất.
3. Lịch sử chỉnh sửa được ghi nhận (người cập nhật, thời gian cập nhật).
Luồng
chính
1. Người dùng mở danh sách Chương trình đào tạo.
2. Chọn một CTĐT cần chỉnh sửa.
3. Nhấn “Chỉnh sửa”.
4. Hệ thống hiển thị form thông tin CTĐT hiện tại.
5. Người dùng chỉnh sửa các trường cần thay đổi.
6. Nhấn “Lưu” để cập nhật.
7. Hệ thống kiểm tra dữ liệu hợp lệ (ví dụ: tổng tín chỉ là số, không trùng tên).
8. Nếu hợp lệ, hệ thống cập nhật dữ liệu và hiển thị thông báo “Cập nhật
thành công.”
9. Use case kết thúc.
Luồng
phụ
- Bước 3a: Nếu người dùng nhập dữ liệu không hợp lệ (ví dụ: ký tự trong ô tín
chỉ, bỏ trống tên CTĐT)
→ Hệ thống hiển thị thông báo lỗi: “Dữ liệu không hợp lệ, vui lòng kiểm tra
lại.”
→ Quay lại bước 5 để chỉnh sửa lại.
- Bước 3b: Nếu người dùng chọn “Hủy” thay vì “Lưu”
→ Hệ thống thoát mà không thay đổi dữ liệu.
Ngoại lệ 1. Mất kết nối đến cơ sở dữ liệu → hiển thị “Không thể cập nhật, vui lòng thử
lại.”
2. Phiên đăng nhập hết hạn → yêu cầu đăng nhập lại trước khi lưu.
3. Trùng mã CTĐT (trường hợp hiếm khi thay đổi mã) → hiển thị “Mã
chương trình đã tồn tại.”
65
Yêu cầu 1. Hệ thống ghi nhận lịch sử cập nhật (người cập nhật, ngày giờ, nội dung
thay đổi).
2. Thời gian phản hồi khi lưu không vượt quá 5 giây.
3. Giao diện chỉnh sửa phải hiển thị rõ các trường bắt buộc bằng dấu (*).
4. Chỉ người có quyền “Cập nhật CTĐT” mới được chỉnh sửa thông tin.
5. Dữ liệu cập nhật phải được đồng bộ hóa tức thời trên toàn hệ thống.
Dữ liệu sử
dụng
- Bảng EducationManagement (chương trình đào tạo).
- Bảng OrganizationUnit (bảng thông tin các đơn vị - khoa quản lý).
- Use Case UC5.3 – Xóa chương trình đào tạo
Tên UC Xóa chương trình đào tạo
Được tạo bởi: Phòng Đào tạo Cập nhật lần cuối
bởi:
Cán bộ phụ trách hệ
thống
Ngày tạo: Ngày sửa đổi cuối
cùng:
10/2025
Mô tả - Cho phép Cán bộ Phòng Đào tạo xóa một chương trình đào tạo (CTĐT) khỏi
hệ thống.
- Chỉ được phép xóa nếu CTĐT chưa có khối kiến thức (Standard Knowledge
Module) hoặc học phần (Course) nào liên kết.
- Hệ thống sẽ kiểm tra ràng buộc dữ liệu, yêu cầu xác nhận thao tác và ghi
nhận lịch sử xóa.
Tác nhân Cán bộ Phòng Đào tạo
Tiền điều
kiện
1. Người dùng đã đăng nhập và có quyền “Quản lý CTĐT”.
2. CTĐT được chọn tồn tại trong cơ sở dữ liệu.
3. CTĐT chưa có dữ liệu liên kết trong bảng StandardKnowledgeModule
hoặc Course.
Hậu điều
kiện
1. CTĐT bị xóa hoàn toàn khỏi hệ thống.
2. Danh sách CTĐT được cập nhật (CTĐT bị xóa không còn hiển thị).
3. Hệ thống ghi nhận lịch sử thao tác (người xóa, thời gian xóa).
Luồng
chính
1. Người dùng mở danh sách Chương trình đào tạo.
2. Chọn một CTĐT cần xóa.
3. Hệ thống kiểm tra ràng buộc dữ liệu xem CTĐT có liên kết với khối kiến
thức hoặc học phần hay không.
4. Nếu không có liên kết, hệ thống hiển thị hộp thoại xác nhận: “Bạn có chắc
chắn muốn xóa chương trình đào tạo này?”
5. Người dùng chọn “Xác nhận”.
6. Hệ thống xóa dữ liệu CTĐT khỏi cơ sở dữ liệu.
7. Hiển thị thông báo: “Xóa chương trình đào tạo thành công.”
8. Use case kết thúc.
Luồng
phụ
- Bước2a: Nếu CTĐT có liên kết với khối kiến thức hoặc học phần:
→ Hệ thống hiển thị thông báo lỗi: “Không thể xóa CTĐT đang được sử
dụng.”
→ Use case kết thúc mà không xóa dữ liệu.
Ngoại lệ 1. Mất kết nối cơ sở dữ liệu → Hiển thị: “Không thể thực hiện thao tác. Vui
lòng thử lại.”
2. Phiên làm việc hết hạn → Yêu cầu đăng nhập lại trước khi xóa.
3. CTĐT đã bị xóa bởi người khác trong quá trình thao tác → Cảnh báo “Dữ
liệu không còn tồn tại.”
66
Yêu cầu 1. Hệ thống yêu cầu xác nhận thao tác xóa (Confirm Dialog) để tránh thao tác
nhầm.
2. Thời gian phản hồi sau khi xác nhận không vượt quá 5 giây.
3. Lịch sử thao tác (audit log) phải lưu lại thông tin người thực hiện, thời
điểm, và nội dung bị xóa.
4. Không cho phép phục hồi CTĐT sau khi đã xóa (trừ khi có chức năng sao
lưu hệ thống).
5. Giao diện cần hiển thị cảnh báo bằng màu đỏ hoặc biểu tượng cảnh báo để
nhấn mạnh tính chất nghiêm trọng của thao tác.
Dữ liệu sử
dụng
- Bảng EducationManagement (chương trình đào tạo)
- Bảng StandardKnowledgeModule
- Bảng Course.
- Use Case UC5.4 – Gán khối kiến thức vào chương trình đào tạo
Tên UC Gán khối kiến thức vào chương trình đào tạo
Được tạo bởi: Phòng Đào tạo Cập nhật lần cuối
bởi:
Cán bộ phụ trách hệ
thống
Ngày tạo: Ngày sửa đổi cuối
cùng:
10/2025
Mô tả Chức năng này cho phép Cán bộ Phòng Đào tạo gán hoặc gỡ các khối kiến
thức cho một chương trình đào tạo (CTĐT) cụ thể.
- Người dùng có thể chọn CTĐT cần thao tác, chọn một hoặc nhiều khối kiến
thức cần thêm, sau đó lưu lại.
- Hệ thống sẽ kiểm tra trùng lặp và cập nhật mối quan hệ giữa CTĐT và khối
kiến thức trong cơ sở dữ liệu.
Tác nhân Cán bộ Phòng Đào tạo
Tiền điều
kiện
1. Người dùng đã đăng nhập và có quyền “Quản lý chương trình đào tạo”.
2. CTĐT và các khối kiến thức cần gán đã tồn tại trong hệ thống.
Hậu điều
kiện
1. Các khối kiến thức được gán thành công vào CTĐT tương ứng.
2. Danh sách khối kiến thức của CTĐT được cập nhật và hiển thị chính xác
trong giao diện.
Luồng
chính
1. Người dùng mở chức năng “Gán khối kiến thức vào CTĐT”.
2. Chọn chương trình đào tạo cần thao tác.
3. Chọn các khối kiến thức cần thêm vào CTĐT (có thể chọn nhiều).
4. Nhấn nút “Lưu”.
5. Hệ thống kiểm tra trùng lặp và lưu thông tin vào bảng Program_Block
(Bảng liên kết giữa chương trình đào tạo và khối kiến thức).
6. Hiển thị thông báo: “Gán khối kiến thức thành công.”
7. Use case kết thúc.
Luồng
phụ
- Bước 3a: Nếu một khối kiến thức đã tồn tại trong CTĐT → Hệ thống hiển
thị thông báo:
“Khối kiến thức này đã được thêm trước đó.”
→ Bỏ qua khối trùng, chỉ lưu các khối mới.
Ngoại lệ 1. Mất kết nối cơ sở dữ liệu → Thông báo “Không thể lưu dữ liệu. Vui lòng
thử lại.”
2. Người dùng không có quyền thao tác → Thông báo “Bạn không có quyền
gán khối kiến thức.”
67
3. Dữ liệu CTĐT bị xóa hoặc thay đổi trong lúc thao tác → Thông báo
“CTĐT không còn tồn tại.”
Yêu cầu 1. Giao diện hiển thị danh sách khối kiến thức kèm checkbox để chọn nhanh.
2. Cho phép tìm kiếm, lọc theo loại khối hoặc mã khối kiến thức.
3. Thời gian lưu dữ liệu không vượt quá 5 giây.
4. Hệ thống ghi nhật ký thao tác (người thực hiện, thời gian, CTĐT, danh sách
khối được gán).
5. Khi có lỗi, hệ thống phải đảm bảo toàn vẹn dữ liệu, không được lưu một
phần.
Dữ liệu sử
dụng
- Bảng EducationManagement (chương trình đào tạo).
- Bảng ProgramBlock (liên kết giữa chương trình đào tạo và khối kiến thức).
- Bảng StandardKnowledgeModule (Khối kiến thức).
- Use Case UC5.5 – Xem chi tiết chương trình đào tạo
Tên UC Xem chi tiết chương trình đào tạo
Được tạo bởi: Phòng Đào tạo Cập nhật lần cuối
bởi:
Cán bộ phụ trách hệ
thống
Ngày tạo: Ngày sửa đổi cuối
cùng:
10/2025
Mô tả Chức năng cho phép Cán bộ Phòng Đào tạo xem toàn bộ thông tin chi tiết của
một chương trình đào tạo (CTĐT). Hệ thống hiển thị các thông tin cơ bản như
mã, tên, mô tả, tổng số tín chỉ, trình độ đào tạo, khoa quản lý, cùng các khối
kiến thức và học phần được gán trong chương trình.
Tác nhân Cán bộ Phòng Đào tạo
Tiền điều
kiện
- Người dùng đã đăng nhập và có quyền xem thông tin CTĐT.
- CTĐT được chọn phải tồn tại trong cơ sở dữ liệu.
Hậu điều
kiện
- Thông tin chi tiết của CTĐT được hiển thị đầy đủ và chính xác.
- Người dùng có thể xem nhưng không thay đổi dữ liệu trong màn hình chi
tiết.
Luồng
chính
1. Người dùng mở menu “Xem danh sách CTĐT”.
2. Chọn một CTĐT cụ thể từ danh sách.
3. Hệ thống truy xuất dữ liệu từ bảng EducationManagement, ProgramBlock,
StandardKnowledgeModule, và Course.
4. Hiển thị chi tiết CTĐT bao gồm:
- Thông tin tổng quan (mã, tên, mô tả, tổng tín chỉ, trình độ, khoa quản lý).
- Danh sách khối kiến thức thuộc CTĐT.
- Danh sách học phần trong từng khối kiến thức.
5. Use Case kết thúc.
Luồng
phụ
- Bước 4a: Nếu CTĐT không có khối kiến thức nào.
→ Hệ thống hiển thị thông báo: “Chưa có khối kiến thức nào được gán cho
chương trình này.”
- Bước 4b: Nếu khối kiến thức không có học phần.
→ Hiển thị: “Chưa có học phần trong khối này.”
Ngoại lệ 1. CTĐT đã bị xóa hoặc không tồn tại.
→ Thông báo “Không tìm thấy chương trình đào tạo.”
2. Lỗi truy xuất cơ sở dữ liệu.
→ Thông báo “Không thể tải dữ liệu. Vui lòng thử lại.”
3. Mất kết nối mạng.
68
→ Thông báo “Kết nối bị gián đoạn.”
Yêu cầu 1. Thông tin hiển thị theo dạng cây phân cấp (CTĐT → Khối kiến thức →
Học phần).
2. Cho phép xuất báo cáo chi tiết (PDF, Excel).
3. Thời gian tải dữ liệu không vượt quá 5 giây.
4. Giao diện phải có chức năng tìm kiếm nhanh trong danh sách học phần.
5. Dữ liệu phải được đồng bộ tự động khi có thay đổi ở khối kiến thức hoặc
học phần.
Dữ liệu sử
dụng
- Bảng EducationManagement (chương trình đào tạo)
- Bảng Course
- Bảng ProgramBlock.
- Bảng StandardKnowledgeModule
- Use Case UC5.6 – Xuất chương trình đào tạo
Tên UC Xuất chương trình đào tạo
Được tạo bởi: Phòng Đào tạo Cập nhật lần cuối
bởi:
Cán bộ phụ trách hệ
thống
Ngày tạo: Ngày sửa đổi cuối
cùng:
10/2025
Mô tả - Use case cho phép cán bộ Phòng Đào tạo xuất toàn bộ thông tin của một
chương trình đào tạo (CTĐT) ra file Excel hoặc PDF, phục vụ cho việc lưu
trữ, chia sẻ hoặc in ấn.
- Thông tin xuất bao gồm: tên CTĐT, mô tả, tổng tín chỉ, các khối kiến thức
và danh sách học phần trong từng khối.
Tác nhân Cán bộ Phòng Đào tạo
Tiền điều
kiện
- CTĐT tồn tại trong hệ thống.
- CTĐT đã có đầy đủ dữ liệu (bao gồm các khối kiến thức và học phần).
Hậu điều
kiện
- File CTĐT được tạo thành công (định dạng .xlsx hoặc .pdf).
- File có thể được lưu trữ, tải về hoặc in ấn.
Luồng
chính
1. Người dùng chọn CTĐT cần xuất.
2. Chọn định dạng file (Excel/PDF).
3. Hệ thống kiểm tra dữ liệu của CTĐT.
4. Hệ thống xuất file chứa danh sách khối kiến thức và học phần.
5. Hiển thị thông báo “Xuất file thành công”.
6. Use case kết thúc.
Luồng
phụ
- Bước 3a: Nếu chưa có dữ liệu đầy đủ
→ Hiển thị “CTĐT chưa hoàn thiện, không thể xuất.”
Ngoại lệ 1. Lỗi kết nối cơ sở dữ liệu.
→ Hệ thống hiển thị “Không thể truy xuất dữ liệu, vui lòng thử lại.”
2. Lỗi ghi file hoặc quyền lưu trữ bị từ chối.
→ Hiển thị “Không thể tạo file, vui lòng kiểm tra quyền lưu trữ.”
Yêu cầu 1. Hệ thống hỗ trợ xuất file theo đúng định dạng chuẩn (.xlsx, .pdf).
2. Định dạng xuất phải có bố cục rõ ràng, dễ đọc, có tiêu đề và mã CTĐT.
Dữ liệu sử
dụng
- Bảng EducationManagement (chương trình đào tạo)
- Bảng Course
- Bảng StandardKnowledgeModule
69
- Use case 5.7 - Sao chép chương trình đào tạo
Tên Use case Sao chép chương trình đào tạo
Được tạo bởi: Phòng Đào tạo Cập nhật lần cuối
bởi:
Cán bộ phụ trách hệ
thống
Ngày tạo: Ngày sửa đổi cuối
cùng:
10/2025
Mô tả - Cho phép cán bộ phòng đào tạo sao chép toàn bộ thông tin của một chương
trình đào tạo hiện có (bao gồm khối kiến thức và học phần) để tạo thành một
chương trình mới.
- Chức năng này giúp tiết kiệm thời gian khi xây dựng chương trình đào tạo
mới dựa trên chương trình đào tạo mẫu hoặc chương trình đào tạo của năm
học trước.
Tác nhân Cán bộ Phòng Đào tạo
Tiền điều
kiện
- Hệ thống đã có ít nhất một chương trình đào tạo hoàn chỉnh.
- Người dùng có quyền “Quản lý chương trình đào tạo”.
Hậu điều
kiện
- Chương trình đào tạo mới được tạo và lưu trong cơ sở dữ liệu.
- Dữ liệu chương trình, khối kiến thức, học phần liên kết được sao chép đúng
và độc lập với bản gốc.
Luồng
chính
1. Người dùng chọn menu “Xây dựng chương trình đào tạo → Sao chép
chương trình đào tạo”.
2. Hệ thống hiển thị danh sách các chương trình đào tạo hiện có.
3. Người dùng chọn chương trình đào tạo nguồn (chương trình cần sao chép).
4. Nhập thông tin chương trình đào tạo mới:
- Mã mới.
- tên mới.
- Mô tả.
- Năm áp dụng.
5. Nhấn “Sao chép”.
6. Hệ thống tạo chương trình đào tạo mới, sao chép toàn bộ khối kiến thức và
học phần liên kết.
7. Hiển thị thông báo “Sao chép chương trình đào tạo thành công”.
8. Use Case kết thúc.
Luồng
phụ
- Bước 4a: Nếu người dùng chưa nhập mã chương trình đào tạo mới.
→ Thông báo “Vui lòng nhập mã chương trình đào tạo mới.”
- Bước 6a: Nếu mã chương trình đào tạo mới trùng với mã đã có
→ Hiển thị “Mã chương trình đào tạo đã tồn tại.”
- Bước 6b: Người dùng có thể chọn “Sao chép toàn bộ” hoặc “Chỉ sao chép
cấu trúc khối kiến thức (không bao gồm học phần)”.
Ngoại lệ 1. Lỗi khi ghi dữ liệu.
→ Hiển thị “Không thể sao chép, vui lòng thử lại.”2. Lỗi ghi file hoặc quyền
lưu trữ bị từ chối.
2. Mất kết nối hoặc quyền hạn bị thu hồi.
→ Hệ thống dừng thao tác và thông báo “Phiên làm việc không hợp lệ.”
Yêu cầu 1. Hệ thống cần đảm bảo tính toàn vẹn dữ liệu khi sao chép (mọi ID khóa
chính phải được tạo mới, không trùng với chương trình đào tạo gốc).
2. Cho phép người dùng chọn phạm vi sao chép:
- Sao chép toàn bộ (bao gồm khối kiến thức và học phần).
- Sao chép cấu trúc (chỉ khối kiến thức, không có học phần).
70
3. Thời gian thực hiện sao chép phải dưới 5 giây với chương trình đào tạo
trung bình (~100 học phần).
Dữ liệu sử
dụng
- Bảng EducationManagement (bảng chương trình đào tạo)
- Bảng Course (bảng học phần)
- Bảng ProgramBlock
- Bảng StandardKnowledgeModule
- Bảng ModuleCourse (Bảng liên kết giữa các khối kiến thức và các học phần
thuộc khối đó).
- Use case 5.8 - Hiển thị chương trình đào tạo sau khi sao chép
Tên Use case Hiển thị chương trình đào tạo sau khi sao chép
Được tạo bởi: Phòng Đào tạo Cập nhật lần cuối
bởi:
Cán bộ phụ trách hệ
thống
Ngày tạo: Ngày sửa đổi cuối
cùng:
10/2025
Mô tả - Sau khi sao chép chương trình đào tạo thành công, hệ thống tự động hiển thị
thông tin chi tiết của chương trình mới để người dùng kiểm tra.
- Thông tin bao gồm: mã chương trình đào tạo mới, tên, mô tả, tổng tín chỉ,
danh sách khối kiến thức và học phần liên kết (nếu có).
Tác nhân Cán bộ Phòng Đào tạo
Tiền điều
kiện
- Chức năng “Sao chép chương trình đào tạo” đã được thực hiện thành công.
- Chương trình đào tạo mới đã được lưu vào cơ sở dữ liệu.
Hậu điều
kiện
- Thông tin chương trình đào tạo mới được hiển thị đầy đủ, chính xác.
- Người dùng có thể chỉnh sửa hoặc xuất chương trình đào tạo mới ngay sau
khi hiển thị.
Luồng
chính
1. Sau khi sao chép thành công, hệ thống tự động chuyển đến giao diện chi
tiết của chương trình đào tạo mới.
2. Hệ thống truy xuất dữ liệu chương trình đào tạo vừa tạo từ bảng Education
Management và các bảng liên quan.
3. Hiển thị thông tin tổng quan:
- Mã.
- Tên.
- Mô tả.
- Tổng tín chỉ.
- Khoa quản lý.
- Năm áp dụng.
4. Hiển thị danh sách khối kiến thức thuộc chương trình đào tạo và các học
phần trong từng khối.
5. Người dùng có thể chọn thao tác:
- Chỉnh sửa.
- Xuất file.
- Trở lại danh sách chương trình đào tạo.
6. Use Case kết thúc.
Luồng
phụ
- Bước 2a: Nếu không truy xuất được dữ liệu chương trình đào tạo mới
→ Hiển thị “Không thể tải thông tin chương trình vừa sao chép.”
- Bước 4a: Nếu chương trình đào tạo chỉ sao chép cấu trúc (không có học
phần)
71
→ Hiển thị thông báo “Chương trình chưa có học phần. Vui lòng gán học
phần sau.”
Ngoại lệ 1. Lỗi kết nối cơ sở dữ liệu
→ Thông báo “Không thể hiển thị dữ liệu. Vui lòng thử lại.”
2. Nếu người dùng không còn quyền xem chương trình đào tạo
→ Hệ thống điều hướng về trang “Danh sách chương trình đào tạo”.
Yêu cầu 1. Hệ thống phải tự động làm nổi bật chương trình đào tạo mới sao chép trong
danh sách hoặc trong tiêu đề chi tiết (ví dụ: “Bản sao của chương trình đào
tạo: 2025_Hệ thống thông tin quản lý”).
2. Cho phép xem và so sánh song song giữa chương trình đào tạo gốc và
chương trình đào tạo vừa sao chép (nếu người dùng chọn).
3. Dữ liệu phải được tải trong thời gian ≤ 3 giây để đảm bảo trải nghiệm
người dùng tốt.
Dữ liệu sử
dụng
- Bảng EducationManagement (bảng chương trình đào tạo)
- Bảng Course (bảng học phần)
- Bảng ProgramBlock
- Bảng StandardKnowledgeModule
- Đối tượng dữ liệu
ID Tên đối tượng dữ liệu Mô tả
DO5 EducationManagement Lưu trữ thông tin về các chương trình đào tạo
của trường: mã chương trình, tên, trình độ đào
tạo, thời gian học, tổng số tín chỉ, khoa quản lý,
mô tả và trạng thái áp dụng.
DO5.1 ProgramBlock Bảng liên kết giữa chương trình đào tạo và các
khối kiến thức. Mỗi bản ghi thể hiện một khối
kiến thức thuộc về một chương trình đào tạo cụ
thể.
DO5.2 StandardKnowledgeModule Lưu thông tin chi tiết của từng khối kiến thức
trong chương trình đào tạo, bao gồm mã khối,
tên khối, loại khối, số tín chỉ tối thiểu và mô tả.
DO5.3 Course Lưu thông tin chi tiết của từng học phần (mã,
tên, số tín chỉ, học phần tiên quyết/song hành,
khoa phụ trách) để phục vụ việc xây dựng
chương trình đào tạo.
DO5.4 ModuleCourse Bảng liên kết giữa các khối kiến thức và các
học phần thuộc khối đó, giúp xác định cấu trúc
chi tiết của từng khối trong chương trình đào
tạo.
- Mô tả đối tượng dữ liệu
+ Bảng EducationManagement
ID Data Field Description Unique Data Type Length Required
DO5-
01
EducationMan
agementID
Mã chương
trình đào tạo
Y Alphanumeric 10 Y
DO5-
02
EducationMan
agementName
Tên chương
trình đào tạo
N Text 150 Y
72
DO5-
03
DegreeLevel Trình độ đào
tạo (Đại học,
Thạc sĩ, Tiến
sĩ, v.v.)
N Text 50 Y
DO5-
04
Duration Thời gian
đào tạo (năm
hoặc học kỳ)
N Integer 2 Y
DO5-
05
TotalCredits Tổng số tín
chỉ toàn
chương trình
N Integer 3 Y
DO5-
06
OrganizationU
nitID
Mã khoa/đơn
vị quản lý
chương trình
N Alphanumeric 10 Y
DO5-
07
Description Mô tả
chương trình
đào tạo
N Text 255 N
DO5-
08
Active Trạng thái áp
dụng (Soạn
thảo, Đang
áp dụng,
Ngừng áp
dụng)
N Text 20 Y
DO5-
09
CreatedBy Người tạo
chương trình
N Text 100 Y
DO5-
10
CreatedDate Ngày tạo bản
ghi
N DateTime - Y
+ Bảng ProgramBlock
ID Data Field Description Unique Data Type Length Required
DO5.1-
01
ProgramBlock
ID
Mã định
danh liên kết
chương trình
– khối kiến
thức
Y Alphanumeric 10 Y
DO5.1-
02
ProgramID Mã chương
trình đào tạo
(liên kết
EducationM
anagement)
N Alphanumeric 10 Y
DO5.1-
03
BlockID Mã khối kiến
thức (liên kết
StandardKno
wledgeModu
le)
N Alphanumeric 10 Y
DO5.1-
04
MinCredits Số tín chỉ tối
thiểu yêu cầu
trong khối
N Integer 3 N
73
DO5.1-
05
Note Ghi chú
thêm
N Text 255 N
+ Bảng StandardKnowledgeModule
ID Data Field Description Unique Data Type Length Required
DO5.2-
01
StandardKnow
ledgeModuleI
D
Mã khối kiến
thức
Y Alphanumeric 10 Y
DO5.2-
02
StandardKnow
ledgeModuleN
ame
Tên khối
kiến thức
N Text 100 Y
DO5.2-
03
StandardKnow
ledgeModuleT
ype
Loại khối
(Đại cương,
Cơ sở ngành,
Chuyên
ngành, v.v.)
N Text 50 Y
DO5.2-
04
MinCredits Số tín chỉ tối
thiểu yêu cầu
trong khối
N Integer 3 Y
DO5.2-
05
Description Mô tả khối
kiến thức
N Text 255 N
DO5.2-
06
Note Ghi chú
thêm
N Text 255 N
+ Bảng Course
ID Data Field Description Unique Data Type Length Required
DO5.3-
01
CourseID Mã học phần Y Alphanumeric 10 Y
DO5.3-
02
CourseName Tên học
phần
N Text 150 Y
DO5.3-
03
Credits Số tín chỉ N Integer 2 Y
DO5.3-
04
Prerequisite Học phần
tiên quyết
(nếu có)
N Text 100 N
DO5.3-
05
Organizati
onUnitID
Mã khoa phụ
trách học
phần
N Alphanumeric 10 Y
DO5.3-
06
Description Mô tả học
phần
N Text 255 N
74
+ Bảng ModuleCourse
ID Data Field Description Unique Data Type Length Required
DO5.4-
01
ModuleCourse
ID
Mã định
danh bản ghi
liên kết khối
– học phần
Y Alphanumeric 10 Y
DO5.4-
02
StandardKnow
ledgeModuleI
D
Mã khối kiến
thức (liên kết
StandardKno
wledgeModu
le)
N Alphanumeric 10 Y
DO5.4-
03
CourseID Mã học phần
(liên kết
Course)
N Alphanumeric 10 Y
DO5.4-
04
EducationMan
agement
Mã chương
trình đào tạo
(liên kết
EducationM
anagement)
N Alphanumeric 10 Y
DO5.4-
05
IsOptional Loại học
phần (0 = bắt
buộc, 1 = tự
chọn)
N Boolean /
Integer
1 N
DO5.4-
06
Note Ghi chú N Text 255 N
4.7. Đặc tả và xây dựng giao diện nhóm UC6 – Quản lý cấu trúc chương trình đào tạo
 Mô tả tổng quan
Use Case này mô tả quy trình cán bộ đào tạo hoặc quản trị viên học vụ thực hiện việc
xây dựng và quản lý cấu trúc chương trình đào tạo, bao gồm việc xác định mối quan hệ giữa
các khối kiến thức, học phần, và thứ tự học tập trong toàn bộ chương trình. Chức năng này
cho phép người dùng thiết lập, chỉnh sửa và theo dõi cấu trúc phân cấp của chương trình đào
tạo nhằm đảm bảo các khối kiến thức và học phần được sắp xếp hợp lý, đúng quy định và đáp
ứng mục tiêu đầu ra của ngành học.
- Hệ thống cho phép người dùng có quyền:
+ Xây dựng cấu trúc chương trình đào tạo theo các tầng: Khối kiến thức → Nhóm học phần
→ Học phần cụ thể.
+ Xác định ràng buộc tiên quyết (prerequisite) giữa các học phần (học phần A phải hoàn
thành trước học phần B).
+ Chỉnhsửa,thêm mới hoặc loại bỏ các thành phần trong cấu trúc đào tạo.
+ Xem cấu trúc chương trình dưới dạng sơ đồ phân cấp hoặc dạng danh sách.
+ Tự động tính tổng số tín chỉ của toàn chương trình và của từng khối kiến thức.
75
- Hệ thống đảm bảo:
+ Mỗi cấu trúc chương trình phải thuộc về một chương trình đào tạo cụ thể.
+ Không cho phép xóa hoặc thay đổi học phần nếu đã có sinh viên đăng ký.
+ Khi cập nhật cấu trúc, hệ thống tự động kiểm tra ràng buộc tiên quyết và đồng bộ sang các
phân hệ liên quan (kế hoạch học tập, phân công giảng dạy).
+ Dữ liệu được lưu trữ và hiển thị nhất quán giữa các dạng biểu diễn (sơ đồ, bảng, danh
sách).
- Kết quả của UC6 là cấu trúc chương trình đào tạo được mô hình hóa và quản lý một cách
logic, chặt chẽ và nhất quán, hỗ trợ tốt cho việc lập kế hoạch học tập, hướng dẫn sinh viên, và
triển khai đào tạo trong toàn hệ thống.
- Mức độ ưu tiên: Rất cao
- Mục tiêu chính: Xây dựng và duy trì cấu trúc chương trình đào tạo rõ ràng, hợp lý và có khả
năng mở rộng, giúp việc tổ chức giảng dạy, đăng ký học phần và kiểm soát tiến độ học tập
được thực hiện thuận lợi, chính xác và hiệu quả.
 Các chức năng chính
Mã UC Tên Use Case Mô tả Tác nhân
UC6.1 Thêm khối kiến
thức
Cho phép người dùng thêm mới một
khối kiến thức vào chương trình đào
tạo hiện có.
Cán bộ phòng
đào tạo
UC6.2 Thêm học phần
vào khối kiến
thức
Cho phép chọn học phần từ danh mục
có sẵn để đưa vào một khối kiến thức
cụ thể.
Cán bộ phòng
đào tạo
UC6.3 Sửa hoặc xóa
khối kiến thức /
học phần
Cho phép chỉnh sửa thông tin hoặc
xóa khối / học phần khỏi chương
trình đào tạo.
Cán bộ phòng
đào tạo
UC5.4 Hiển thị cấu trúc
chương trình đào
tạo
Cho phép xem toàn bộ cấu trúc khối
kiến thức và học phần của chương
trình đào tạo.
Cán bộ phòng
đào tạo
 Đặc tả Use Case
- Use Case UC6.1 – Thêm khối kiến thức
Tên Use case Thêm khối kiến thức
Được tạo bởi: Phòng Đào tạo Cập nhật lần cuối
bởi:
Cán bộ phụ trách hệ
thống
Ngày tạo: Ngày sửa đổi cuối
cùng:
10/2025
Mô tả - Chức năng cho phép Cán bộ Phòng Đào tạo thêm một khối kiến thức mới
vào trong chương trình đào tạo (CTĐT) hiện có.
- Khối kiến thức có thể thuộc các loại như: Giáo dục đại cương, Cơ sở ngành,
Chuyên ngành, Đồ án tốt nghiệp, Tự chọn,...
- Hệ thống đảm bảo khối mới được gắn với đúng chương trình và tự động cập
nhật cấu trúc chương trình sau khi lưu.
76
Tác nhân Cán bộ Phòng Đào tạo
Tiền điều
kiện
1. Chương trình đào tạo đã tồn tại trong hệ thống.
2. Người dùng có quyền thêm khối kiến thức.
3. Danh mục loại khối kiến thức (chuẩn) đã được cấu hình sẵn.
Hậu điều
kiện
1. Khối kiến thức mới được thêm thành công vào chương trình đào tạo và hiển
thị trong danh sách.
2. Cấu trúc chương trình đào tạo được cập nhật.
3. Hệ thống ghi nhận thông tin người thực hiện và thời gian thao tác.
Luồng
chính
1. Người dùng truy cập chức năng “Quản lý cấu trúc CTĐT”.
2. Chọn chương trình đào tạo cần thêm khối kiến thức.
3. Nhấn nút “Thêm khối kiến thức”.
4. Hệ thống hiển thị form nhập thông tin khối kiến thức, bao gồm:
- Tên khối kiến thức
- Loại khối (Bắt buộc / Tự chọn)
- Số tín chỉ dự kiến
- Mô tả (nếu có)
5. Người dùng nhập thông tin và nhấn “Lưu”.
6. Hệ thống kiểm tra tính hợp lệ của dữ liệu (tên trùng, thiếu trường bắt
buộc,...).
7. Nếu hợp lệ → hệ thống lưu khối kiến thức mới vào cơ sở dữ liệu (bảng
Program_Block).
8. Hệ thống hiển thị thông báo “Thêm khối kiến thức thành công.”
9. Use Case kết thúc.
Luồng
phụ
- Bước 5a: Người dùng chọn “Hủy”
→ Hệ thống quay lại danh sách khối kiến thức, không lưu thay đổi.
- Bước 6a: Nếu tên khối kiến thức trùng với khối đã có trong cùng chương
trình đào tạo.
→ Hệ thống hiển thị thông báo “Khối kiến thức này đã tồn tại.”
Ngoại lệ 1. Mất kết nối cơ sở dữ liệu.
→ Hệ thống hiển thị thông báo lỗi và không lưu dữ liệu.
2. Người dùng không có quyền thao tác.
→ Hiển thị “Bạn không có quyền thêm khối kiến thức.”
Yêu cầu 1. Tên khối kiến thức là duy nhất trong phạm vi mỗi chương trình đào tạo.
2. Các trường bắt buộc (Tên, Loại khối, Số tín chỉ) phải được nhập trước khi
lưu.
3. Dữ liệu khối kiến thức được lưu vào bảng ProgramBlock và liên kết với
EducationProgram.
4. Sau khi thêm, danh sách khối kiến thức của CTĐT phải được cập nhật ngay
trên giao diện mà không cần tải lại trang.
Dữ liệu sử
dụng
- Bảng EducationManagement (chương trình đào tạo).
- Bảng StandardKnowledgeModule (Khối kiến thức)
- Use Case UC6.2 – Thêm học phần vào khối kiến thức
Tên Use case Thêm học phần vào khối kiến thức
Được tạo bởi: Phòng Đào tạo Cập nhật lần cuối
bởi:
Cán bộ phụ trách hệ
thống
Ngày tạo: Ngày sửa đổi cuối
cùng:
10/2025
77
Mô tả - Chức năng cho phép Cán bộ Phòng Đào tạo thêm các học phần cụ thể vào
một khối kiến thức thuộc chương trình đào tạo.
- Người dùng có thể chọn nhiều học phần cùng lúc từ danh mục học phần có
sẵn.
- Hệ thống đảm bảo các học phần được gán đúng khối và loại học phần (Bắt
buộc hoặc Tự chọn).
Tác nhân Cán bộ Phòng Đào tạo
Tiền điều
kiện
1. Chương trình đào tạo và các khối kiến thức đã tồn tại trong hệ thống.
2. Danh mục học phần đã có sẵn.
3. Người dùng có quyền thao tác “Gán học phần”.
Hậu điều
kiện
1. Các học phần được thêm thành công vào khối kiến thức tương ứng.
2. Quan hệ giữa học phần và khối kiến thức được lưu vào cơ sở dữ liệu (bảng
Module_course).
3. Giao diện danh sách học phần trong khối được cập nhật ngay.
Luồng
chính
1. Người dùng truy cập mục “Quản lý cấu trúc CTĐT”.
2. Chọn chương trình đào tạo cần chỉnh sửa.
3. Chọn khối kiến thức cần thêm học phần.
4. Nhấn “Thêm học phần”.
5. Hệ thống hiển thị danh sách học phần khả dụng (lọc theo khoa, bậc đào tạo,
loại học phần…).
6. Người dùng đánh dấu chọn một hoặc nhiều học phần cần thêm.
7. Nhấn “Lưu”.
8. Hệ thống kiểm tra:
- Học phần đã tồn tại trong khối chưa.
- Dữ liệu hợp lệ và khối có đủ số tín chỉ.
9. Nếu hợp lệ → hệ thống lưu quan hệ học phần – khối vào bảng
ModuleCourse.
10. Hệ thống hiển thị thông báo “Thêm học phần thành công”.
11. Use Case kết thúc.
Luồng
phụ
- Bước 5a: Người dùng chọn “Hủy”
→ Quay lại màn hình danh sách học phần mà không lưu thay đổi.
- Bước 7a. Nếu người dùng không chọn học phần nào
→ Hệ thống hiển thị cảnh báo “Chưa chọn học phần để thêm.”
- Bước 8a: Nếu một học phần đã tồn tại trong khối
→ Hệ thống hiển thị “Học phần đã tồn tại trong khối này.” và bỏ qua học
phần đó.
Ngoại lệ 1. Mất kết nối cơ sở dữ liệu hoặc lỗi hệ thống
→ Hiển thị “Không thể lưu dữ liệu, vui lòng thử lại sau.”
2. Người dùng không có quyền thêm học phần
→ Hiển thị “Bạn không có quyền thực hiện thao tác này.”
Yêu cầu 1. Chỉ cho phép gán học phần đã có trong danh mục Course.
2. Học phần chỉ được gán một lần cho mỗi khối kiến thức.
3. Thông tin gán học phần được lưu trong bảng ModuleCourse, có liên kết
đến StandardKnowledgeModule và Course.
4. Giao diện sau khi thêm phải hiển thị tổng số tín chỉ được cập nhật của khối
kiến thức.
5. Hệ thống phải ghi lại người thực hiện và thời gian thao tác trong lịch sử cập
nhật.
Dữ liệu sử
dụng
- Bảng Course (Học phần)
- Bảng ModuleCourse (Liên kết giữa khối và học phần).
78
- Use case UC6.3 – Sửa hoặc xóa khối kiến thức / học phần
Tên Use case Sửa hoặc xóa khối kiến thức / học phần
Được tạo bởi: Phòng Đào tạo Cập nhật lần cuối
bởi:
Cán bộ phụ trách hệ
thống
Ngày tạo: Ngày sửa đổi cuối
cùng:
10/2025
Mô tả - Chức năng cho phép Cán bộ Phòng Đào tạo chỉnh sửa hoặc xóa khối kiến
thức hoặc học phần trong khối thuộc chương trình đào tạo.
- Người dùng có thể sửa các thông tin như: tên khối, mô tả, tổng tín chỉ, hoặc
cập nhật loại học phần (bắt buộc/tự chọn).
- Hệ thống đảm bảo tính toàn vẹn dữ liệu khi xóa, chỉ cho phép xóa nếu không
có ràng buộc liên kết.
Tác nhân Cán bộ Phòng Đào tạo
Tiền điều
kiện
1. Chương trình đào tạo, khối kiến thức và học phần đã tồn tại trong hệ thống.
2. Người dùng đã đăng nhập và có quyền “Chỉnh sửa cấu trúc CTĐT”.
3. Dữ liệu được hiển thị chính xác trong giao diện cấu trúc chương trình.
Hậu điều
kiện
1. Thông tin khối kiến thức hoặc học phần được cập nhật hoặc xóa thành
công.
2. Cơ sở dữ liệu (StandardKnowledgeModule, ModuleCourse) được cập nhật
tương ứng.
3. Lịch sử thay đổi được ghi nhận (người thao tác, thời gian, loại thay đổi).
Luồng
chính
1. Người dùng truy cập chức năng “Quản lý cấu trúc CTĐT”.
2. Chọn CTĐT cần thao tác.
3. Hệ thống hiển thị danh sách các khối kiến thức và học phần thuộc khối.
4. Người dùng chọn một khối kiến thức hoặc học phần cần sửa hoặc xóa.
5. Chọn “Chỉnh sửa” hoặc “Xóa”.
6. - Nếu chọn “Chỉnh sửa”:
+ Hệ thống mở form chỉnh sửa (tên khối, mô tả, số tín chỉ, loại học phần…).
+ Người dùng cập nhật thông tin → nhấn “Lưu”.
+ Hệ thống kiểm tra dữ liệu hợp lệ và lưu thay đổi.
- Nếu chọn “Xóa”:
+ Hệ thống kiểm tra ràng buộc liên kết (ví dụ: học phần đang thuộc CTĐT
khác hoặc đã có điểm).
+ Nếu hợp lệ → hiển thị hộp thoại xác nhận xóa.
+ Người dùng xác nhận → hệ thống xóa khỏi bảng dữ liệu.
7. Hệ thống hiển thị thông báo “Cập nhật thành công” hoặc “Xóa thành công”.
8. Giao diện cấu trúc CTĐT được làm mới.
9. Use Case kết thúc.
Luồng
phụ
- Bước 5a. Nếu người dùng chọn “Hủy”
→ quay lại danh sách mà không lưu thay đổi.
- Bước 6a.1: Nếu dữ liệu chỉnh sửa không hợp lệ (thiếu tên, số tín chỉ âm,
v.v.)
→ Hiển thị “Thông tin không hợp lệ, vui lòng kiểm tra lại.”
- Bước 6b.1: Nếu khối/học phần đang được sử dụng trong CTĐT khác
→ thông báo “Không thể xóa vì đang được liên kết.”
Ngoại lệ 1. Lỗi kết nối cơ sở dữ liệu
→ hiển thị “Không thể lưu thay đổi, vui lòng thử lại.”
2. Người dùng không có quyền thao tác.
→ hiển thị “Bạn không có quyền chỉnh sửa/xóa.”
79
3. Lỗi xóa dữ liệu do vi phạm khóa ngoại.
→ hệ thống khôi phục trạng thái ban đầu.
Yêu cầu 1. Hệ thống chỉ cho phép sửa hoặc xóa khối/học phần khi không vi phạm ràng
buộc dữ liệu.
2. Mọi thay đổi phải được ghi nhận trong bảng Audit Log.
3. Sau khi chỉnh sửa, tổng tín chỉ của CTĐT và khối kiến thức phải được tự
động cập nhật.
4. Khi xóa học phần, hệ thống tự động cập nhật lại danh sách học phần trong
khối.
5. Giao diện phải hiển thị thông báo xác nhận trước khi thực hiện thao tác xóa.
Dữ liệu sử
dụng
- Bảng StandardKnowledgeModule
- Bảng ModuleCourse
- Use case UC6.4 – Hiển thị cấu trúc chương trình đào tạo
Tên Use case Hiển thị cấu trúc chương trình đào tạo
Được tạo bởi: Phòng Đào tạo Cập nhật lần cuối
bởi:
Cán bộ phụ trách hệ
thống
Ngày tạo: Ngày sửa đổi cuối
cùng:
10/2025
Mô tả - Cho phép người dùng (thường là chuyên viên đào tạo hoặc trưởng khoa)
xem toàn bộ cấu trúc chương trình đào tạo của một ngành trong một khóa học
cụ thể.
- Hệ thống sẽ hiển thị danh sách các khối kiến thức và các học phần thuộc
từng khối, kèm theo các thông tin chi tiết như số tín chỉ, loại học phần (bắt
buộc/tự chọn), và tổng số tín chỉ toàn chương trình.
Tác nhân - Cán bộ Phòng Đào tạo
- Chuyên viên đào tạo
- Trưởng khoa
Tiền điều
kiện
1. Chương trình đào tạo đã được tạo trong hệ thống.
2. Dữ liệu các khối kiến thức và học phần đã được thêm vào cấu trúc chương
trình.
3. Người dùng đã đăng nhập và có quyền truy cập chức năng “Xây dựng
chương trình đào tạo”.
Hậu điều
kiện
1. Cấu trúc chương trình đào tạo được hiển thị đầy đủ trên giao diện.
2. Người dùng có thể xem chi tiết từng khối và học phần, hoặc chọn thao tác
khác như chỉnh sửa, xóa, in, xuất file PDF/Excel.
Luồng
chính
1. Người dùng chọn chức năng “Hiển thị cấu trúc CTĐT”
2. Hệ thống hiển thị danh sách các CTĐT hiện có
3. Người dùng chọn ngành và khóa học cần xem.
4. Hệ thống hiển thị danh sách khối kiến thức theo thứ tự logic (Đại cương →
Cơ sở ngành → Chuyên ngành → Tốt nghiệp...).
5. Hệ thống hiển thị các học phần trong từng khối, kèm thông tin:
- Mã HP.
- Tên HP.
- Số tín chỉ
- Loại học phần
6. Người dùng có thể chọn xem chi tiết từng học phần hoặc thống kê tổng số
tín chỉ toàn CTĐT.
80
7. Người dùng in hoặc xuất cấu trúc CTĐT ra file Excel/PDF (tùy chọn).
8. Xuất thành công và hiển thị thông báo cho người dùng.
9. Use case kết thúc.
Luồng
phụ
- Bước 3a: Nếu chương trình chưa có dữ liệu khối kiến thức hoặc học phần
→ Hệ thống hiển thị thông báo “Chưa có dữ liệu cấu trúc CTĐT cho ngành
này.”
- Bước 3b: Nếu người dùng thay đổi lựa chọn (ngành/khóa)
→ Hệ thống tải lại cấu trúc tương ứng mà không cần thoát trang.
Ngoại lệ 1. Người dùng không có quyền truy cập
→ Hệ thống thông báo “Bạn không có quyền xem cấu trúc CTĐT.”
2. Dữ liệu bị lỗi hoặc không thể truy xuất
→ Hệ thống hiển thị “Không thể tải dữ liệu, vui lòng thử lại sau.”
3. Kết nối mạng bị gián đoạn trong khi tải dữ liệu
→ Hệ thống cho phép thử lại hoặc quay về trang trước.
Yêu cầu 1. Dữ liệu CTĐT phải được lưu trữ đầy đủ, chính xác trong cơ sở dữ liệu
trước khi hiển thị.
2. Chức năng hiển thị phải đảm bảo khả năng tìm kiếm, lọc và phân cấp (theo
khối, học phần).
3. Kết quả hiển thị phải đúng định dạng, có thể xuất được ra PDF/Excel.
3. Chỉ người dùng có quyền Quản lý CTĐT mới được truy cập chức năng này.
Dữ liệu sử
dụng
- Bảng EducationManagement
- Bảng StandardKnowledgeModule
- Bảng Course
- Đối tượng dữ liệu
ID Tên đối tượng dữ liệu Mô tả
DO6.1 EducationManagement Chứa thông tin tổng thể về chương trình đào tạo
(mã CTĐT, tên, trình độ, tổng tín chỉ, khoa
quản lý, trạng thái).
DO6.2 StandardKnowledgeModule Lưu thông tin các khối kiến thức thuộc CTĐT
(mã khối, tên, loại, số tín chỉ tối thiểu).
81
DO6.3 ModuleCourse Liên kết giữa khối kiến thức và học phần thuộc
khối đó.
DO6.4 Course Danh mục học phần sử dụng trong chương trình
đào tạo.
DO6.5 StructureLog Ghi nhận lịch sử thay đổi cấu trúc CTĐT: người
thực hiện, thời gian, nội dung thay đổi.
- Mô tả đối tượng dữ liệu
+ Bảng EducationManagement
ID Data Field Description Unique Data Type Length Required
DO6.1-
01
EducationMan
agementID
Mã chương
trình đào tạo
Y Alphanumeric 10 Y
DO6.1-
02
EducationMan
agementName
Tên chương
trình đào tạo
N Text 150 Y
DO6.1-
03
DegreeLevel Trình độ đào
tạo (Đại học,
Thạc sĩ, Tiến
sĩ)
N Text 50 Y
DO6.1-
04
OrganizationU
nitID
Mã khoa
quản lý
chương trình
N Alphanumeric 10 Y
DO6.1-
05
TotalCredit
s
Tổng số tín
chỉ của
chương trình
N Integer 3 Y
DO6.1-
06
Duration Thời gian
đào tạo (năm
/ học kỳ)
N Integer 2 Y
DO6.1-
07
Active Trạng thái áp
dụng (Soạn
thảo / Áp
dụng /
Ngừng áp
dụng)
N Text 20 Y
DO6.1-
08
CreatedDate Ngày tạo bản
ghi
N DateTime - Y
DO6.1-
09
UpdatedDat
e
Ngày cập
nhật gần
nhất
N DateTime - N
+ Bảng StandardKnowledgeModule
ID Data Field Description Unique Data Type Length Required
DO6.2-
01
StandardKnow
ledgeModuleI
D
Mã khối kiến
thức
Y Alphanumeric 10 Y
DO6.2-
02
StandardKnow
ledgeModuleN
ame
Tên khối
kiến thức
N Text 10 Y
82
DO6.2-
03
StandardKnow
ledgeModuleT
ype
Loại khối
(Đại cương,
Cơ sở ngành,
Chuyên
ngành, v.v.)
N Text 50 Y
DO6.2-
04
MinCredits Số tín chỉ tối
thiểu của
khối
N Integer 3 Y
DO6.2-
05
Description Mô tả chi tiết
về khối kiến
thức
N Text 255 N
DO6.2-
06
Note Ghi chú
thêm
N Text 255 N
83
+ Bảng ModuleCourse
ID Data Field Description Unique Data Type Length Required
DO6.3-
01
ModuleCourse
ID
Mã bản ghi
liên kết khối
– học phần
Y Alphanumeric 10 Y
DO6.3-
02
StandardKnow
ledgeModuleI
D
Mã khối kiến
thức (liên kết
StandardKno
wledgeModu
le)
N Alphanumeric 10 Y
DO6.3-
03
CourseID Mã học phần
(liên kết
Course)
N Alphanumeric 10 Y
DO6.3-
04
EducationMan
agementID
Mã chương
trình đào tạo
(liên kết
EducationM
anagement)
N Alphanumeric 10 Y
DO6.3-
05
CourseType Loại học
phần (Bắt
buộc / Tự
chọn)
N Text 20 Y
DO6.3-
06
SemesterSugg
ested
Học kỳ gợi ý
học phần
N Integer 2 N
DO6.3-
07
Note Ghi chú N Text 255 N
+ Bảng Course
ID Data Field Description Unique Data Type Length Required
DO6.4-
01
CourseID Mã học phần Y Alphanumeric 10 Y
DO6.4-
02
CourseName Tên học
phần
N Text 150 Y
DO6.4-
03
Credits Số tín chỉ
của học phần
N Integer 2 Y
DO6.4-
04
OrganizationU
nitID
Mã khoa phụ
trách học
phần
N Alphanumeric 10 Y
DO6.4-
05
Prerequisite Học phần
tiên quyết
(nếu có)
N Text 100 N
DO6.4-
06
Description Mô tả nội
dung học
phần
N Text 255 N
84
+ Bảng StructureLog
ID Data Field Description Unique Data Type Length Required
DO6.5-
01
LogID Mã bản ghi
nhật ký thay
đổi cấu trúc
Y Alphanumeric 10 Y
DO6.5-
02
EducationMan
agementID
Mã chương
trình đào tạo
liên quan
N Alphanumeric 10 Y
DO6.5-
03
Action Hành động
(Thêm, Sửa,
Xóa)
N Text 20 Y
DO6.5-
04
EditedBy Người thực
hiện thay đổi
N Text 100 Y
DO6.5-
05
EditedDate Ngày thực
hiện thay đổi
N DateTime - Y
DO6.5-
06
ChangeNote Nội dung
thay đổi
N Text 255 N
4.9. Đặc tả và xây dựng giao diện nhóm UC7 - Thiết lập đơn vị học phí
 Mô tả tổng quan
Use Case này mô tả quy trình cán bộ tài chính hoặc quản trị viên học vụ thực hiện việc
thiết lập đơn vị học phí trong hệ thống. Đơn vị học phí là cơ sở để tính toán mức học phí cho
các học phần, khối kiến thức, hoặc chương trình đào tạo theo quy định của nhà trường.
Chức năng này cho phép người dùng tạo mới, chỉnh sửa, tra cứu và quản lý các thông tin liên
quan đến đơn vị học phí, nhằm đảm bảo việc thu học phí được chính xác, linh hoạt và thống
nhất trên toàn hệ thống.
- Hệ thống cho phép người dùng có quyền:
+ Tạo mới đơn vị học phí, bao gồm các thông tin: mã đơn vị học phí, tên đơn vị, giá trị (số
tiền trên một tín chỉ hoặc đơn vị học phần), thời gian áp dụng và mô tả.
+ Chỉnh sửa thông tin đơn vị học phí khi có thay đổi về mức giá hoặc quy định tài chính.
+ Xóa đơn vị học phí nếu chưa được áp dụng cho bất kỳ học phần hoặc chương trình đào tạo
nào.
+ Tra cứu và lọc danh sách đơn vị học phí theo mã, tên hoặc trạng thái áp dụng.
+ Thiết lập mốc thời gian hiệu lực để hệ thống tự động áp dụng mức học phí phù hợp theo
từng giai đoạn đào tạo.
- Hệ thống đảm bảo:
+ Mã đơn vị học phí là duy nhất, không trùng lặp.
+ Không cho phép xóa hoặc thay đổi đơn vị học phí đang được sử dụng trong hệ thống.
85
+ Khi cập nhật giá trị học phí, hệ thống lưu lại lịch sử thay đổi để phục vụ tra cứu và đối
chiếu sau này.
+ Các đơn vị học phí có thể được liên kết với khối kiến thức, ngành học hoặc chương trình
đào tạo tùy theo chính sách học vụ.
- Kết quả của use case 7 là hệ thống quản lý tập trung các đơn vị học phí, đảm bảo việc tính
toán và thu học phí được thực hiện chính xác, minh bạch và nhất quán giữa các học phần và
chương trình đào tạo.
- Mức độ ưu tiên: Trung bình – Cao
- Mục tiêu chính: Đảm bảo hệ thống thiết lập và quản lý đơn vị học phí thống nhất, hỗ trợ cho
việc tính toán, đối chiếu và cập nhật học phí chính xác cho từng học phần, khối kiến thức và
chương trình đào tạo.
 Đặc tả Use case
Tên Use case Thiết lập đơn vị học phí
Được tạo bởi: Phòng Kế hoạch –
Tài chính
Cập nhật lần cuối
bởi:
Cán bộ phụ trách hệ
thống
Ngày tạo: Ngày sửa đổi cuối
cùng:
10/2025
Mô tả - Cho phép Phòng Kế hoạch – Tài chính hoặc Phòng Đào tạo thiết lập đơn giá
học phí cho mỗi tín chỉ của từng Chương trình đào tạo (CTĐT).
- Học phí này được sử dụng để tính học phí tối thiểu hoàn thành chương trình
đào tạo và hỗ trợ các chức năng tính toán, báo cáo tài chính.
Tác nhân - Cán bộ Phòng Kế hoạch – Tài chính
Tiền điều
kiện
1. Chương trình đào tạo đã tồn tại và được phê duyệt trong hệ thống.
2. Người dùng có quyền truy cập chức năng “Thiết lập đơn vị học phí”.
3. Hệ thống có sẵn danh sách hệ đào tạo và loại chương trình đào tạo (chính
quy, chất lượng cao, liên thông, v.v).
Hậu điều
kiện
1. Đơn giá học phí được lưu vào cơ sở dữ liệu.
2. Chương trình đào tạo được liên kết với mức học phí tương ứng.
3. Lịch sử thay đổi học phí được ghi nhận trong hệ thống.
Luồng
chính
1. Người dùng truy cập chức năng “Thiết lập đơn vị học phí”.
2. Hệ thống hiển thị danh sách chương trình đào tạo hiện có.
3. Người dùng chọn chương trình đào tạo cần thiết lập học phí.
4. Hệ thống hiển thị form nhập thông tin:
- Giá tiền/tín chỉ.
- Hệ đào tạo.
- Năm áp dụng.
5. Người dùng nhập dữ liệu học phí và nhấn “Lưu”.
6. Hệ thống kiểm tra hợp lệ:
- Giá trị số dương.
- Không trùng thời gian áp dụng.
7. Hệ thống lưu thông tin vào bảng TuitionUnit (Đơn giá học phí).
8. Hệ thống hiển thị thông báo “Thiết lập đơn vị học phí thành công.”
9. Use case kết thúc.
86
Luồng
phụ
- Bước 2a: Nếu người dùng chọn chương trình đào tạo chưa có dữ liệu hệ đào
tạo.
→ Hệ thống hiển thị cảnh báo và yêu cầu bổ sung trước khi thiết lập.
- Bước 4a: Nếu giá tiền/tín chỉ nhập sai định dạng hoặc để trống,
→ Hệ thống hiển thị thông báo “Giá trị học phí không hợp lệ.”
- Bước 4b: Nếu thời gian áp dụng trùng với bản ghi hiện có.
→ Hệ thống yêu cầu xác nhận cập nhật thay vì thêm mới.
Ngoại lệ 1. Người dùng không có quyền thực hiện.
→ Hệ thống từ chối và hiển thị “Bạn không có quyền truy cập chức năng
này.”
2. Lỗi kết nối cơ sở dữ liệu.
→ Hiển thị “Không thể lưu thông tin học phí, vui lòng thử lại.”
3. Chương trình đào tạo đã bị khóa (không còn hiệu lực).
→ Hệ thống chặn thao tác và thông báo “Chương trình đào tạo không còn
hiệu lực để thiết lập học phí.”
Yêu cầu 1. Mức học phí phải lưu kèm thông tin chương trình đào tạo, hệ đào tạo và
thời gian áp dụng.
2. Tại cùng thời điểm, chỉ tồn tại một đơn giá học phí hợp lệ cho mỗi chương
trình đào tạo.
3. Người dùng có thể tra cứu và chỉnh sửa lịch sử học phí.
4. Dữ liệu học phí phải được bảo mật và toàn vẹn.
Dữ liệu sử
dụng
- Bảng EducationManagement (chương trình đào tạo).
- Bảng TuitionUnit (Đơn giá học phí).
- Bảng TrainingSystem (Hệ đào tạo)
- Đối tượng dữ liệu
ID Tên đối tượng dữ liệu Mô tả
DO7 TuitionUnit Lưu thông tin về đơn vị học phí (mức thu, đơn vị
tính, năm áp dụng, tình trạng).
DO7.1 EducationManagement Thông tin chương trình đào tạo mà đơn vị học
phí được áp dụng.
DO7.2 OrganizationUnit Thông tin về khoa hoặc đơn vị phụ trách quản lý
mức học phí.
DO7.3 TuitioLog Ghi nhận lịch sử thay đổi mức học phí (ngày
hiệu lực, người thực hiện, hành động).
- Mô tả đối tượng dữ liệu
+ Bảng: TuitionUnit (Đơn vị học phí)
ID Data Field Description Unique Data Type Length Required
DO7-
01
TuitionUnitI
D
Mã đơn vị học
phí
Y Alphanumeric 10 Y
DO7-
02
EducationMa
nagementID
Mã chương
trình đào tạo
(liên kết
EducationMa
nagement)
N Alphanumeric 10 Y
DO7-
03
Organization
UnitID
Mã khoa áp
dụng học phí
N Alphanumeric 10 Y
87
DO7-
04
YearApplied Năm học áp
dụng
N Integer 4 Y
DO7-
05
FeePerCredit Mức học phí
trên mỗi tín
chỉ
N Decimal 10,2 Y
DO7-
06
Currency Đơn vị tiền tệ
(VNĐ,
USD,...)
N Text 10 Y
DO7-
07
Active Trạng thái áp
dụng (Soạn
thảo, Đang áp
dụng, Hết
hiệu lực)
N Text 20 Y
DO7-
08
EffectiveDate Ngày bắt đầu
hiệu lực
N Date - Y
DO7-
09
ExpiredDate Ngày hết hiệu
lực
N Date - N
DO7-
10
Note Ghi chú N Text 255 N
+ Bảng EducationManagement
ID Data Field Description Unique Data Type Length Required
DO7.1
-01
EducationMa
nagementID
Mã chương
trình đào tạo
Y Alphanumeric 10 Y
DO7.1
-02
EducationMa
nagementNa
me
Tên chương
trình đào tạo
N Text 150 Y
DO7.1
-03
DegreeLevel Trình độ đào
tạo (Đại học,
Thạc sĩ, Tiến
sĩ, v.v.)
N Text 50 Y
DO7.1
-04
Organization
UnitID
Khoa quản lý
chương trình
N Alphanumeric 10 Y
DO7.1
-05
TotalCredits Tổng tín chỉ
toàn chương
trình
N Integer 3 Y
+ Bảng OrganizationUnit
ID Data Field Description Unique Data Type Length Required
DO7.2
-01
Organization
UnitID
Mã khoa / đơn
vị
Y Alphanumeric 10 Y
DO7.2
-02
Organization
UnitName
Tên khoa /
đơn vị phụ
trách
N Text 100 Y
DO7.2
-03
Description Mô tả N Text 255 N
88
DO7.2
-04
Active Trạng thái
hoạt động
(Đang hoạt
động / Ngừng
hoạt động)
N Text 20 Y
+ Bảng TuitionLog
ID Data Field Description Unique Data Type Length Required
DO7.3
-01
TuitionLogID Mã bản ghi
lịch sử thay
đổi học phí
Y Alphanumeric 10 Y
DO7.3
-02
TuitionUnitI
D
Mã đơn vị học
phí liên quan
N Alphanumeric 10 Y
DO7.3
-03
Action Hành động
thực hiện
(Thêm, Sửa,
Xóa)
N Text 20 Y
DO7.3
-04
EditedBy Người thực
hiện thay đổi
N Text 100 Y
DO7.3
-05
EditedDate Ngày thực
hiện thay đổi
N DateTime - Y
DO7.3
-06
OldValue Giá trị cũ
(trước khi
thay đổi)
N Decimal 10,2 N
DO7.3
-07
NewValue Giá trị mới
(sau thay đổi)
N Decimal 10,2 N
DO7.3
-08
Note Ghi chú / lý
do thay đổi
N Date 255 N
4.10. Đặc tả và xây dựng giao diện nhóm UC8 – Tính toán học phí
 Mô tả tổng quan
Use Case này mô tả quy trình hệ thống hoặc cán bộ tài chính thực hiện việc tính toán học
phí cho sinh viên dựa trên khối lượng học tập đăng ký, đơn vị học phí, và các chính sách học
vụ hiện hành. Chức năng này giúp đảm bảo việc tính toán học phí được tự động, chính xác,
minh bạch và có thể tùy chỉnh theo từng chương trình đào tạo, khóa học hoặc loại hình đào
tạo (tín chỉ, niên chế, đào tạo đặc biệt, v.v.).
- Hệ thống cho phép người dùng có quyền:
+ Khởi tạo quá trình tính học phí cho toàn khóa học hoặc cho từng sinh viên cụ thể.
+ Tự động tổng hợp dữ liệu học phần đã đăng ký, khối lượng tín chỉ, và đơn vị học phí tương
ứng.
+ Áp dụng chính sách miễn giảm học phí (nếu có) dựa trên đối tượng sinh viên hoặc quy định
của nhà trường.
89
+ Tính toán tổng học phí phải thu, kèm theo chi tiết từng học phần, khối kiến thức hoặc kỳ
học.
+ Xuất kết quả tính toán ra báo cáo hoặc bảng tổng hợp để phục vụ công tác thu học phí.
- Hệ thống đảm bảo:
+ Sử dụng đúng đơn vị học phí tương ứng với chương trình hoặc thời gian hiệu lực đã thiết
lập trong use case 7.
+ Tự động làm tròn số tiền theo quy định của nhà trường.
+ Cho phép cập nhật lại học phí khi sinh viên thay đổi đăng ký học phần hoặc rút học phần.
+ Ghi nhận lịch sử tính học phí, bao gồm người thực hiện, thời điểm, và giá trị tính toán,
phục vụ đối chiếu sau này.
- Kết quả của use case 8 là học phí của sinh viên được tính toán đầy đủ và chính xác, giúp
nhà trường dễ dàng theo dõi, đối chiếu và quản lý công tác tài chính học vụ, đồng thời giảm
sai sót trong quá trình thu – hoàn – điều chỉnh học phí.
- Mức độ ưu tiên: Rất cao
- Mục tiêu chính: Đảm bảo quá trình tính toán học phí được tự động hóa, chính xác và minh
bạch, hỗ trợ hiệu quả công tác quản lý học vụ và tài chính sinh viên trong toàn hệ thống.
 Các chức năng chính
- Danh sách use case
Mã UC Tên Use Case Mô tả Tác nhân
UC8.1 Tính học phí học
phần
Thiết lập, cập nhật và quản lý thông
tin học phí cho từng học phần trong
chương trình đào tạo
Cán bộ phòng kế
toán – tài chính
UC8.2 Tính học phí sinh
viên
Tính toán và quản lý học phí của từng
sinh viên theo học kỳ, dựa trên số
lượng tín chỉ đăng ký và học phí/tín
chỉ của chương trình đào tạo.
Cán bộ phòng tài
chính – kế toán
- Đặc tả
+ Use case UC8.1 – Tính học phí học phần
Tên Use case Tính học phí học phần
Được tạo bởi: Phòng Kế hoạch –
Tài chính
Cập nhật lần cuối
bởi:
Cán bộ phụ trách hệ
thống
Ngày tạo: Ngày sửa đổi cuối
cùng:
10/2025
Mô tả - Cho phép cán bộ đào tạo hoặc người quản lý học phí thiết lập, cập nhật và
quản lý thông tin học phí cho từng học phần trong chương trình đào tạo
(CTĐT).
- Hệ thống lưu trữ học phí theo tín chỉ và tự động tính thành tiền của học phần
dựa trên đơn giá/tín chỉ được cấu hình trước đó.
90
Tác nhân - Cán bộ Phòng Kế hoạch – Tài chính
Tiền điều
kiện
1. Danh sách học phần đã tồn tại trong hệ thống (từ UC3 – Quản lý học phần).
2. Đơn vị học phí (mức học phí/tín chỉ) đã được thiết lập (từ UC7 – Thiết lập
đơn vị học phí).
3. Chương trình đào tạo đã được tạo và kích hoạt (từ UC5 – Xây dựng
CTĐT).
Hậu điều
kiện
1. Thông tin học phí của từng học phần được lưu vào bảng CourseFee.
2. Dữ liệu được sử dụng để tính học phí cho sinh viên (UC8.2) và tổng học
phí CTĐT.
3. Người quản lý có thể xem, sửa, hoặc xóa thông tin học phí theo từng năm
học.
Luồng
chính
1. Người dùng truy cập chức năng “Quản lý học phí học phần” trong hệ
thống.
2. Hệ thống hiển thị danh sách các học phần thuộc chương trình đào tạo đang
được chọn.
3. Người dùng chọn “Thêm mới học phí học phần”.
4. Hệ thống hiển thị form nhập thông tin gồm:
- Mã học phần.
- Mã CTĐT.
- Số tín chỉ.
- Đơn giá/tín chỉ.
- Năm áp dụng.
5. Người dùng nhập thông tin và nhấn Lưu.
6. Hệ thống kiểm tra dữ liệu: kiểm tra mã học phần, năm áp dụng, và đơn vị
học phí.
7. Hệ thống tính toán học phí tối thiểu theo công thức:
Học phí tối thiểu = Số tín chỉ tối thiểu × Giá tiền/tín chỉ.
8. Nếu hợp lệ, hệ thống lưu thông tin vào bảng CourseFee và hiển thị thông
báo “Thiết lập học phí thành công”.
9. Người dùng xuất báo cáo học phí tối thiểu ra file Excel hoặc PDF (tùy
chọn).
10. Use case kết thúc.
Luồng
phụ
- Bước 6a: Nếu mã học phần không tồn tại trong danh mục học phần, hệ thống
→ Hiển thị thông báo “Học phần không hợp lệ”.
- Bước 6b: Nếu đã tồn tại bản ghi học phí trùng Mã học phần và Năm áp
dụng.
→ Hệ thống hiển thị thông báo “Học phần này đã được thiết lập học phí cho
năm học đó”.
Ngoại lệ 1. Thiếu thông tin bắt buộc hoặc định dạng sai (VD: đơn giá không phải số).
2. Hệ thống không tìm thấy đơn vị học phí tương ứng với năm áp dụng.
3. Lỗi kết nối cơ sở dữ liệu khi lưu thông tin.
Yêu cầu 1. Hệ thống phải liên kết bảng CourseFee với TuitionUnit, Course, và
EducationManagement.
2. Mỗi bản ghi học phí học phần phải có: Mã học phần, Mã CTĐT, Số tín chỉ,
Đơn giá/tín chỉ, Thành tiền, Năm áp dụng.
3. Chỉ người dùng có quyền “Cán bộ đào tạo” hoặc “Quản trị viên” mới được
thêm/sửa học phí.
4. Tất cả mức học phí phải tuân thủ quy định tài chính của nhà trường.
Dữ liệu
sử dụng
- Bảng EducationManagement (chương trình đào tạo).
- Bảng TuitionUnit (Đơn giá học phí).
91
- Bảng Course – Danh sách học phần trong CTĐT
- Bảng CourseFee – Thông tin học phí học phần.
+ Use case 8.2 – Tính học phí sinh viên
Tên Use case Tính học phí học sinh viên
Được tạo bởi: Phòng Kế hoạch –
Tài chính
Cập nhật lần cuối
bởi:
Cán bộ phụ trách hệ
thống
Ngày tạo: Ngày sửa đổi cuối
cùng:
10/2025
Mô tả - Cho phép cán bộ đào tạo hoặc cán bộ tài chính tính toán và quản lý học phí
của từng sinh viên theo học kỳ, dựa trên số lượng tín chỉ đăng ký và học
phí/tín chỉ của chương trình đào tạo.
- Hệ thống tự động lấy thông tin học phần từ bảng CourseFee, tính tổng học
phí và ghi nhận trạng thái thanh toán cho sinh viên.
Tác nhân - Cán bộ Phòng Kế hoạch – Tài chính
Tiền điều
kiện
1. Sinh viên đã được ghi danh trong hệ thống (UC2 – Quản lý người dùng/
nhân sự).
2. Các học phần sinh viên đăng ký đã có thông tin học phí (từ UC8.1 – Tính
học phí học phần).
3. Đơn vị học phí và chương trình đào tạo đã được thiết lập hợp lệ.
Hậu điều
kiện
1. Học phí của sinh viên được tính toán và lưu trong bảng StudentTuition.
2. Hệ thống ghi nhận trạng thái thanh toán (Chưa nộp / Đã nộp / Miễn giảm).
3. Dữ liệu học phí sinh viên có thể được truy xuất để in phiếu hoặc tổng hợp
báo cáo học phí toàn trường.
Luồng
chính
1. Người dùng truy cập chức năng “Tính học phí sinh viên” trong hệ thống.
2. Hệ thống hiển thị danh sách sinh viên theo chương trình đào tạo hoặc học
kỳ.
3. Người dùng chọn sinh viên cần tính học phí.
4. Hệ thống truy xuất danh sách học phần sinh viên đăng ký và học phí tương
ứng (từ bảng CourseFee).
5. Hệ thống tự động tính
- Tổng số tín chỉ.
- Đơn giá/tín chỉ.
- Tổng học phí.
6. Người dùng kiểm tra kết quả tính toán và nhấn Lưu kết quả học phí.
7. Hệ thống lưu dữ liệu vào bảng StudentTuition và hiển thị thông báo “Tính
học phí thành công”.
8. Sinh viên có thể tra cứu học phí của mình qua tài khoản cá nhân.
9. Use case kết thúc.
Luồng
phụ
- Bước 4a: Nếu sinh viên chưa đăng ký học phần.
→ Hệ thống hiển thị “Chưa có học phần đăng ký để tính học phí.”
- Bước 5a: Nếu học phần không có dữ liệu học phí.
→ Hệ thống cảnh báo “Học phần chưa được thiết lập học phí.”
- Bước 7a: Nếu cán bộ muốn áp dụng chính sách miễn giảm học phí.
→ Hệ thống cho phép chọn mức giảm (%) trước khi lưu.
Ngoại lệ 1. Lỗi kết nối cơ sở dữ liệu khi truy xuất học phần hoặc học phí.
2. Thiếu dữ liệu học phần hoặc sai mã CTĐT.
3. Hệ thống không tìm thấy thông tin học phí cho năm học hiện tại.
92
Yêu cầu 1. Hệ thống phải liên kết dữ liệu giữa StudentTuition, CourseFee, và
TuitionUnit.
2. Mỗi bản ghi trong StudentTuition phải chứa: Mã sinh viên, Học kỳ, Tổng
tín chỉ, Tổng học phí, Trạng thái thanh toán.
3. Cán bộ tài chính có thể cập nhật trạng thái thanh toán thủ công khi sinh
viên đã nộp tiền.
4. Sinh viên chỉ có quyền xem học phí, không được chỉnh sửa dữ liệu.
Dữ liệu
sử dụng
- Bảng StudentTuition: Thông tin học phí của từng sinh viên.
- Bảng UserAccount: Thông tin sinh viên, mã sinh viên, học kỳ.
- Bảng TuitionUnit: Mức đơn vị học phí theo CTĐT.
- Bảng CourseFee – Thông tin học phí học phần.
- Đối tượng dữ liệu
ID Tên đối tượng dữ liệu Mô tả
DO8.1 CourseFee Lưu thông tin học phí của từng học phần theo
chương trình đào tạo, dùng làm cơ sở để tính học
phí sinh viên.
DO8.2 StudentTuition Quản lý học phí của từng sinh viên theo học kỳ
và chương trình học; dữ liệu được tính tự động
dựa trên số tín chỉ và đơn giá/tín chỉ.
DO8.3 TuitionUnit Lưu thông tin về mức học phí cho mỗi tín chỉ
theo chương trình đào tạo và năm học áp dụng.
DO8.4 EducationManagement Xác định CTĐT áp dụng học phí, làm cơ sở liên
kết giữa học phần, học phí và sinh viên.
DO8.5 TuitionCalculationLog Ghi nhận thông tin về các lần tính học phí, bao
gồm thời gian, người thực hiện, chương trình đào
tạo, và tổng học phí tính được.
- Mô tả đối tượng dữ liệu
+ Bảng CourseFee
ID Data Field Description Unique Data Type Length Required
DO8.1
-01
CourseFeeID Mã học phí
học phần
Y Alphanumeric 10 Y
DO8.1
-02
CourseID Mã học phần N Text 10 Y
DO8.1
-03
EducationMa
nagementID
Mã chương
trình đào tạo
N Text 10 Y
DO8.1
-04
Credit Số tín chỉ N Numeric 2 Y
DO8.1
-05
UnitPrice Đơn giá/tín
chỉ
N Decimal 10,2 Y
DO8.1
-06
TotalAmount Thành tiền
(Credit ×
UnitPrice)
N Decimal 12,2 N
DO8.1
-07
YearApplied Năm học áp
dụng
N Integer 4 Y
93
+ Bảng StudentTuition
ID Data Field Description Unique Data Type Length Required
DO8.2
-01
StudentTuitio
nID
Mã học phí
sinh viên
Y Alphanumeric 10 Y
DO8.2
-02
UserAccountI
D
Mã sinh viên N Text 20 Y
DO8.2
-03
EducationMa
nagementID
Mã chương
trình đào tạo
N Text 10 Y
DO8.2
-04
Semester Học kỳ N Text 10 Y
DO8.2
-05
TotalCredits Tổng số tín
chỉ đăng ký
N Numeric 3 Y
DO8.2
-06
TotalFee Tổng học phí
(tự động tính)
N Decimal 12,2 Y
DO8.2
-07
PaymentActi
ve
Trạng thái
thanh toán
(Chưa nộp/Đã
nộp/Miễn
giảm)
N Text 20 N
DO8.2
-08
Note Ghi chú N Text 200 N
+ Bảng TuitionUnit
ID Data Field Description Unique Data Type Length Required
DO8.3
-01
TuitionUnitI
D
Mã đơn vị học
phí
Y Alphanumeric 10 Y
DO8.3
-02
EducationMa
nagementID
Mã chương
trình đào tạo
(liên kết
EducationMa
nagement)
N Alphanumeric 10 Y
DO8.3
-03
FeePerCredit Mức học phí /
tín chỉ
N Decimal 10,2 Y
DO8.3
-04
YearApplied Năm áp dụng N Integer 4 Y
DO8.3
-05
Currency Đơn vị tiền tệ
(VNĐ, USD,
…)
N Text 10 Y
DO8.3
-06
Active Trạng thái
(Đang áp
dụng / Hết
hiệu lực)
N Text 20 Y
94
+ Bảng EducationManagement
ID Data Field Description Unique Data Type Length Required
DO8.4
-01
EducationMa
nagementID
Mã chương
trình đào tạo
Y Alphanumeric 10 Y
DO8.4
-02
EducationMa
nagementNa
me
Tên chương
trình đào tạo
N Text 150 Y
DO8.4
-03
DegreeLevel Trình độ đào
tạo (Đại học,
Cao học, Tiến
sĩ)
N Text 50 Y
DO8.4
-04
Organization
UnitID
Mã khoa quản
lý chương
trình
N Alphanumeric 10 Y
DO8.4
-05
TotalCredits Tổng tín chỉ
toàn chương
trình
N Integer 3 Y
+ Bảng TuitionCalculationLog
ID Data Field Description Unique Data Type Length Required
DO8.5
-01
TuitionCalcul
ationID
Mã bản ghi
tính học phí
Y Alphanumeric 10 Y
DO8.5
-02
EducationMa
nagementID
Mã chương
trình đào tạo
N Text 10 Y
DO8.5
-03
TuitionCalcul
ationDate
Ngày thực
hiện tính học
phí
N Date - Y
DO8.5
-04
UserID Người thực
hiện tính toán
N Text 50 Y
DO8.5
-05
TotalTuition Tổng học phí
chương trình
(tự động tính)
N Decimal 12,2 N
DO8.5
-06
Note Ghi chú N Text 255 N
5. YÊU CẦU CHỨC NĂNG
5.1. Phân tích dữ liệu cho từng nhóm chức năng
- Nhóm UC1 – Quản lý cơ cấu tổ chức
Đối tượng dữ liệu Mô tả Các trường dữ liệu chính
Đơn vị tổ chức
(OrganizationUnit)
Lưu thông tin các đơn vị trong
cơ cấu tổ chức như Trường,
Khoa, Bộ môn, Phòng ban.
- Mã đơn vị (OrgID)
- Tên đơn vị
- Loại đơn vị
- Mã đơn vị cha,
- Ngày thành lập
- Trạng thái.
95
- Nhóm UC2 – Quản lý người dùng (nhân sự)
Đối tượng dữ liệu Mô tả Các trường dữ liệu chính
Người dùng
(UserAccount)
Lưu thông tin tài khoản người
dùng hệ thống.
- Mã người dùng
- Họ tên
- Email
- SĐT,
- Vai trò (Admin, Cán bộ, Giảng
viên, Sinh viên)
- Đơn vị công tác
- Mật khẩu (mã hóa)
- Trạng thái hoạt động.
Phân quyền
(UserRole)
Liên kết người dùng với các vai
trò được phân công.
- Mã người dùng
- Mã vai trò
- Ngày cấp quyền.
- Nhóm UC3 – Quản lý học phần
Đối tượng dữ liệu Mô tả Các trường dữ liệu chính
Học phần (Course) Lưu thông tin học phần của
chương trình đào tạo.
- Mã học phần,
- Tên học phần,
- Số tín chỉ,
- Loại học phần (bắt buộc/tự
chọn),
- Mô tả,
- Học phần tiên quyết,
- Khoa phụ trách.
- Nhóm UC4 – Quản lý khối kiến thức
Đối tượng dữ liệu Mô tả Các trường dữ liệu chính
Khối kiến thức
(Standard
knowledge
module)
Phân nhóm các học phần trong
CTĐT.
- Mã khối,
- Tên khối,
- Loại khối,
- Mô tả,
- Ghi chú.
- Nhóm UC5 – Xây dựng chương trình đào tạo
Đối tượng dữ liệu Mô tả Các trường dữ liệu chính
Chương trình đào
tạo
(Education
Management)
Lưu thông tin tổng thể về
CTĐT.
- Mã CTĐT,
- Tên CTĐT,
- Trình độ,
- Năm áp dụng,
- Trạng thái,
- Người tạo.
Phiên bản CTĐT
(Education
Version)
Ghi nhận lịch sử thay đổi
CTĐT.
- Mã phiên bản,
- Mã CTĐT,
- Ngày tạo,
- Người thực hiện,
- Ghi chú thay đổi.
- Nhóm UC6 – Quản lý cấu trúc chương trình đào tạo
Đối tượng dữ liệu Mô tả Các trường dữ liệu chính
96
Cấu trúc CTĐT
(Education
Structure)
Xác định mối quan hệ giữa khối
kiến thức và học phần
- Mã CTĐT,
- Mã khối,
- Mã học phần,
- Số tín chỉ,
- Ghi chú.
- Nhóm UC7 – Thiết lập đơn vị học phí
Đối tượng dữ liệu Mô tả Các trường dữ liệu chính
Đơn vị học phí
(TuitionUnit)
Quản lý các đơn vị tính học phí
cho học phần hoặc CTĐT.
- Mã đơn vị,
- Tên đơn vị,
- Số tiền/tín chỉ,
- Ngày hiệu lực,
- Ghi chú.
- Nhóm UC8 – Tính toán học phí
Đối tượng dữ liệu Mô tả Các trường dữ liệu chính
Học phí học phần
(CourseFee)
Lưu thông tin học phí từng học
phần theo CTĐT.
- Mã học phần,
- Mã CTĐT,
- Số tín chỉ,
- Đơn giá/tín chỉ,
- Thành tiền.
Học phí sinh viên
(StudentTuition)
Quản lý học phí của từng sinh
viên theo học kỳ, chương trình
học.
- Mã sinh viên,
- Học kỳ,
- Tổng tín chỉ đăng ký,
- Tổng học phí,
- Trạng thái thanh toán (Chưa
nộp/Đã nộp/Miễn giảm).
5.2. Mô hình dữ liệu cho cả hệ thống
Hệ thống sử dụng mô hình dữ liệu quan hệ (Relational Model), đảm bảo:
+ Quản lý thống nhất thông tin đào tạo và tài chính.
+ Liên kết chặt chẽ giữa CTĐT, học phần, đơn vị học phí và học phí sinh viên.
+ Hỗ trợ mở rộng cho các nghiệp vụ quản lý sinh viên hoặc kế toán học ph
- Các thực thể chính và mối quan hệ
+ OrganizationUnit (1–n) UserAccount → mỗi người dùng thuộc một đơn vị.
+ UserAccount (n–n) UserRole → một người dùng có thể có nhiều vai trò.
+ Education (1–n) Education Version
+ Education (1–n) Standard knowledge module
+ Standard knowledge module (1–n) Course
+ Course (n–1) OrganizationUnit
+ TuitionUnit (1–n) CourseFee
+ CourseFee (n–n) StudentTuition thông qua Enrollment (bảng đăng ký học phần).
97
- Mô tả tính toán học phí (logic dữ liệu)
Công thức tính học phí từng sinh viên:
Tổng học phí = ∑ (Số tín chỉ học phần × Đơn giá/tín chỉ)
6. CÁC THUỘC TÍNH CHẤT LƯỢNG (YÊU CẦU PHI CHỨC NĂNG)
6.1. Tính khả dụng (Usability)
- Mô tả:
Hệ thống được thiết kế để thân thiện với người dùng, trực quan và dễ sử dụng cho nhiều đối
tượng khác nhau: quản trị viên, giảng viên, cán bộ đào tạo và sinh viên.
- Yêu cầu chi tiết:
+ Giao diện đơn giản, bố cục thống nhất giữa các phân hệ.
+ Các nút chức năng (Thêm, Sửa, Xóa, Lưu, Xuất Excel/PDF…) hiển thị rõ ràng, dễ nhận
biết.
+ Hệ thống cung cấp các thông báo hướng dẫn và cảnh báo lỗi rõ ràng, dễ hiểu.
+ Có chức năng tìm kiếm, lọc và phân trang dữ liệu giúp thao tác nhanh hơn.
+ Cho phép truy cập trên nhiều trình duyệt (Chrome, Edge, Firefox) và thiết bị (PC, Laptop,
Tablet).
+ Thời gian đào tạo người dùng mới không quá 30 phút để có thể thao tác cơ bản trên hệ
thống.
98
6.2. Hiệu năng (Performance)
- Mô tả:
Hệ thống đảm bảo xử lý dữ liệu nhanh, hoạt động ổn định với lượng truy cập đồng thời cao.
- Yêu cầu chi tiết:
+ Thời gian phản hồi trung bình cho thao tác tìm kiếm, xem hoặc cập nhật dữ liệu ≤ 3 giây.
+ Hệ thống hỗ trợ tối thiểu 200 người dùng truy cập đồng thời mà không làm giảm đáng kể
hiệu suất.
+ Cơ sở dữ liệu được tối ưu truy vấn (indexing, caching) để xử lý khối lượng dữ liệu lớn (≥
100.000 bản ghi).
+ Tự động ghi log và giám sát hiệu năng hệ thống (sử dụng công cụ hoặc module giám sát).
+ Tối ưu dung lượng lưu trữ bằng cách lưu trữ dữ liệu lịch sử riêng biệt và có chính sách
backup định kỳ.
6.3. An toàn bảo mật (Security)
- Mô tả:
Hệ thống đảm bảo bảo mật thông tin người dùng, dữ liệu đào tạo và học phí, ngăn chặn truy
cập trái phép hoặc rò rỉ thông tin.
- Yêu cầu chi tiết:
+ Hỗ trợ xác thực người dùng bằng tên đăng nhập & mật khẩu (có thể mở rộng sang xác thực
hai lớp – 2FA).
+ Mật khẩu được mã hóa bằng thuật toán băm (SHA-256 hoặc tương đương) trước khi lưu
trong CSDL.
+ Phân quyền truy cập theo vai trò người dùng (Role-Based Access Control – RBAC):
o Quản trị viên: toàn quyền quản lý dữ liệu hệ thống.
o Cán bộ đào tạo: quản lý CTĐT, học phần, học phí.
o Giảng viên: xem và cập nhật học phần được phân công.
o Sinh viên: chỉ xem thông tin và tra cứu học phí.
+ Ghi nhận log hoạt động người dùng: đăng nhập, cập nhật, xóa, sao chép CTĐT, tính toán
học phí,…
+ Bảo vệ hệ thống khỏi các lỗ hổng bảo mật phổ biến: SQL Injection, XSS, CSRF.
+ Các kết nối trao đổi dữ liệu sử dụng giao thức HTTPS/TLS.
+ Sao lưu dữ liệu tự động hàng ngày và phục hồi nhanh khi có sự cố.
99
6.4. Tính an toàn (Reliability & Safety)
- Mô tả:
Hệ thống duy trì hoạt động ổn định, dữ liệu được bảo toàn, có khả năng phục hồi nhanh khi
xảy ra lỗi hoặc sự cố hệ thống.
- Yêu cầu chi tiết:
+ Thời gian hoạt động (uptime) của hệ thống đạt ≥ 99,5% trong năm.
+ Có chính sách sao lưu (backup) và phục hồi (restore) định kỳ (hằng ngày, hằng tuần, hằng
tháng).
+ Khi lỗi hệ thống xảy ra, dữ liệu người dùng đang thao tác phải được lưu tạm (autosave) để
tránh mất mát.
+ Hệ thống có khả năng phục hồi trong vòng 2 giờ sau sự cố nghiêm trọng (Disaster
Recovery).
+ Cơ sở dữ liệu có cơ chế kiểm tra toàn vẹn dữ liệu (data integrity check) định kỳ.
+ Khi thao tác xóa dữ liệu, hệ thống yêu cầu xác nhận và lưu vào bảng nhật ký (Log) để khôi
phục khi cần thiết.
7. YÊU CẦU ĐỊA PHƯƠNG HÓA VÀ QUỐC TẾ HÓA
Hệ thống vừa đảm bảo phù hợp với đặc thù Việt Nam (địa phương hóa), vừa mở rộng
linh hoạt cho các trường hợp hợp tác và trao đổi quốc tế (quốc tế hóa), đáp ứng yêu cầu phát
triển lâu dài của các cơ sở giáo dục.
7.1. Địa phương hóa (Localization)
Hệ thống quản lý đào tạo được thiết kế để đáp ứng các yêu cầu sử dụng tại các cơ sở giáo dục
đại học Việt Nam, do đó cần đảm bảo các yếu tố địa phương hóa sau:
- Ngôn ngữ giao diện:
+ Giao diện người dùng, báo cáo, thông báo và hướng dẫn sử dụng hiển thị bằng tiếng Việt là
mặc định.
+ Hệ thống cho phép mở rộng thêm ngôn ngữ khác (ví dụ: tiếng Anh) khi cần.
- Định dạng dữ liệu:
+ Ngày tháng: Sử dụng định dạng chuẩn Việt Nam: dd/MM/yyyy.
+ Số thập phân và tiền tệ: Sử dụng dấu phẩy “,” làm dấu phân cách thập phân và dấu chấm
“.” để tách hàng nghìn.
+ Tiền tệ: Hiển thị và tính toán theo đơn vị VNĐ (Việt Nam đồng).
- Quy định và đơn vị học tập:
+ Phù hợp với quy định của Bộ Giáo dục & Đào tạo Việt Nam về cấu trúc chương trình đào
tạo, học phần, tín chỉ, và quy đổi điểm.
100
+ Các thuật ngữ như “học phần”, “tín chỉ”, “chương trình đào tạo”, “đơn vị học phí”, “khối
kiến thức” được chuẩn hóa theo quy định hiện hành.
- Định dạng tài liệu đầu ra:
+ Báo cáo, biểu mẫu (PDF, Excel, Word) được trình bày theo chuẩn hành chính Việt Nam.
+ Phông chữ mặc định: Times New Roman, cỡ chữ 13 hoặc 14, mã Unicode (TCVN3 hoặc
UTF-8).
7.2. Quốc tế hóa (Internationalization - i18n)
Hệ thống được thiết kế với khả năng mở rộng để hỗ trợ đa ngôn ngữ và các quy chuẩn quốc
tế trong tương lai:
- Hỗ trợ đa ngôn ngữ:
+ Toàn bộ các chuỗi ký tự trong hệ thống được tách biệt trong tệp cấu hình, dễ dàng dịch
sang các ngôn ngữ khác như English, French, hoặc Japanese.
+ Cho phép người dùng chọn ngôn ngữ hiển thị trong phần Cài đặt tài khoản.
- Chuẩn hóa mã hóa ký tự:
+ Sử dụng mã UTF-8 để đảm bảo hiển thị chính xác các ký tự tiếng Việt có dấu và ngôn ngữ
quốc tế.
- Chuẩn thời gian và múi giờ:
+ Hỗ trợ đồng bộ múi giờ tự động theo vị trí người dùng.
+ Mặc định múi giờ: Asia/Ho_Chi_Minh (GMT+7).
- Tiền tệ và học phí:
+ Mặc định là VNĐ, nhưng hệ thống cho phép mở rộng sang các đơn vị tiền tệ khác (USD,
EUR, JPY) nếu triển khai tại các trường quốc tế hoặc có hợp tác quốc tế.
- Quy chuẩn nhập xuất dữ liệu:
+ Cho phép xuất dữ liệu theo định dạng CSV, JSON, XML, dễ dàng tích hợp với hệ thống
đào tạo quốc tế hoặc cơ sở dữ liệu chung của trường liên kết.
8. CÁC YÊU CẦU KHÁC
8.1. Yêu cầu về triển khai hệ thống
- Hạ tầng triển khai:
+ Hệ thống có thể được triển khai trên:
o Môi trường On-premise: Cài đặt trên máy chủ nội bộ của trường đại học, kết
nối mạng LAN nội bộ.
o Môi trường Cloud: Triển khai trên các nền tảng đám mây như AWS, Azure,
hoặc Google Cloud để tăng khả năng mở rộng và bảo trì.
101
o Hệ thống cần có khả năng chạy ổn định trên các trình duyệt phổ biến như
Google Chrome, Edge, Firefox, và Safari.
- Hệ điều hành:
o Máy chủ: Hỗ trợ hệ điều hành Windows Server hoặc Linux Ubuntu.
o Máy trạm người dùng: Hỗ trợ Windows 10/11, macOS, hoặc Linux desktop.
- Cơ sở dữ liệu:
o Sử dụng hệ quản trị cơ sở dữ liệu MySQL, PostgreSQL, hoặc SQL Server.
o Cần có cơ chế sao lưu và phục hồi dữ liệu định kỳ (backup/restore).
- Phân tách môi trường:
Có 3 môi trường hoạt động:
+ Development (phát triển)
+ Testing (kiểm thử)
+ Production (chính thức)
8.2. Yêu cầu về tích hợp hệ thống
- Tích hợp với hệ thống hiện có:
+ Hệ thống quản lý đào tạo cần tích hợp với:
o Hệ thống quản lý sinh viên (Student Management System)
o Hệ thống quản lý nhân sự (HRM)
o Hệ thống kế toán / tài chính để đồng bộ dữ liệu học phí.
o Cổng thông tin đào tạo (Portal) dành cho sinh viên và giảng viên.
- Kết nối dữ liệu:
+ Hỗ trợ các chuẩn giao tiếp:
o RESTful API hoặc GraphQL API
o Web Service (SOAP/XML) nếu kết nối với hệ thống cũ.
+ Cơ chế đồng bộ hai chiều (bi-directional sync) giữa các hệ thống.
- Tích hợp đăng nhập:
+ Hỗ trợ Single Sign-On (SSO) và xác thực thông qua LDAP / OAuth2.0 / Google /
Microsoft account.
8.3. Yêu cầu về bảo trì và nâng cấp
- Hệ thống phải có khả năng:
102
+ Cập nhật phiên bản phần mềm mà không ảnh hưởng đến dữ liệu người dùng.
+ Cho phép bảo trì theo lịch trình định kỳ (ban đêm hoặc ngoài giờ hành chính).
+ Có công cụ log và giám sát hoạt động hệ thống để phát hiện lỗi kịp thời.
- Cung cấp tài liệu kỹ thuật và tài liệu hướng dẫn người dùng sau khi triển khai.
8.4. Yêu cầu về đào tạo và hỗ trợ người dùng
- Đào tạo:
+ Cung cấp khóa đào tạo ngắn hạn cho:
o Quản trị hệ thống (IT Admin)
o Cán bộ phòng đào tạo
o Cán bộ tài chính (liên quan đến tính học phí)
o Giảng viên và sinh viên (nếu có giao diện người dùng riêng)
- Tài liệu hướng dẫn:
+ Cung cấp tài liệu hướng dẫn sử dụng chi tiết bằng tiếng Việt (PDF, video, hoặc online
help).
- Hỗ trợ kỹ thuật:
+ Có kênh hỗ trợ (email, hotline, ticket) hoạt động trong giờ hành chính.
+ Cập nhật bản vá lỗi (bug fix) định kỳ hoặc theo yêu cầu khẩn cấp.
8.5. Yêu cầu về sao lưu và khôi phục dữ liệu
- Sao lưu:
+ Hệ thống phải tự động sao lưu toàn bộ dữ liệu ít nhất một lần mỗi ngày.
+ Dữ liệu sao lưu được lưu trữ ở vị trí an toàn, có thể tách biệt với máy chủ chính.
- Khôi phục:
+ Có công cụ khôi phục dữ liệu nhanh trong trường hợp sự cố, đảm bảo thời gian khôi phục
không quá 4 giờ đối với sự cố thông thường.
- Kiểm thử định kỳ:
+ Thực hiện kiểm tra tính toàn vẹn dữ liệu và khả năng khôi phục ít nhất 1 lần/tháng.
8.6. Yêu cầu về mở rộng và nâng cấp tương lai
- Thiết kế hệ thống theo kiến trúc module hóa (modular architecture), cho phép:
+ Thêm mới các chức năng mà không ảnh hưởng đến hệ thống cũ.
+ Mở rộng sang các phân hệ khác (ví dụ: quản lý lịch học, quản lý tốt nghiệp, quản lý nghiên
cứu khoa học).
103
- Cấu trúc dữ liệu và API được thiết kế linh hoạt để có thể tích hợp với các hệ thống học trực
tuyến (LMS) trong tương lai.
9. KẾT LUẬN
Tài liệu đặc tả yêu cầu phần mềm (SRS) cho Hệ thống Quản lý Đào tạo được xây dựng
nhằm mô tả đầy đủ, chi tiết và thống nhất các yêu cầu chức năng, phi chức năng, dữ liệu và các
yếu tố kỹ thuật liên quan đến việc phát triển một hệ thống phục vụ công tác quản lý đào tạo
trong các cơ sở giáo dục đại học.
Hệ thống hướng tới việc tự động hóa và chuẩn hóa các quy trình nghiệp vụ đào tạo, bao
gồm:
- Quản lý cơ cấu tổ chức và nhân sự;
- Quản lý danh mục học phần, khối kiến thức và cấu trúc chương trình đào tạo;
- Xây dựng, sao chép và quản lý chương trình đào tạo theo từng khóa, ngành, bậc học;
- Quản lý và tính toán đơn vị học phí dựa trên dữ liệu đào tạo;
- Đảm bảo khả năng mở rộng, tích hợp và bảo mật dữ liệu người dùng.
Bên cạnh việc đáp ứng các yêu cầu chức năng, hệ thống còn được thiết kế chú trọng
đến hiệu năng, an toàn bảo mật, khả năng triển khai linh hoạt và khả năng tích hợp với các hệ
thống hiện có. Điều này giúp hệ thống có thể vận hành ổn định trong môi trường đại học quy
mô lớn, nhiều phân hệ nghiệp vụ và dữ liệu phức tạp.
Tài liệu này đóng vai trò là cơ sở thống nhất giữa nhóm phân tích, nhóm phát triển, và
các bên liên quan (phòng đào tạo, phòng tài chính, ban quản trị hệ thống) trong suốt quá trình
thiết kế, xây dựng, kiểm thử và triển khai sản phẩm.
Trong các giai đoạn tiếp theo, nhóm phát triển sẽ dựa trên tài liệu SRS này để:
- Thiết kế mô hình hệ thống (System Design Document - SDD);
- Xây dựng và kiểm thử các module chức năng;
- Đánh giá, hiệu chỉnh theo phản hồi của người dùng thực tế.
Tóm lại, Hệ thống Quản lý Đào tạo không chỉ là một công cụ hỗ trợ vận hành, mà còn
là nền tảng quan trọng hướng tới chuyển đổi số trong giáo dục đại học, góp phần nâng cao hiệu
quả quản lý, minh bạch thông tin, và chất lượng đào tạo.
104
TÀI LIỆU THAM KHẢO
1. Giáo trình: Karl Wiegers, Joy Beatty - Software Requirements, 3rd Edition -
libgen.li
2. Thông tư 10/2020/TT-BGDĐT – Quy chế tổ chức và hoạt động của Đại học
vùng và các cơ sở giáo dục đại học thành viên.
https://thuvienphapluat.vn/van-ban/Giao-duc/Thong-tu-10-2020-TT-BGDDTQuy-che-to-chuc-cua-dai-hoc-vung-va-co-so-giao-duc-dai-hoc-thanh-vien442817.aspx
3. Nghị định 99/2019/NĐ-CP – Hướng dẫn thi hành Luật Giáo dục đại học sửa
đổi
https://thuvienphapluat.vn/van-ban/Giao-duc/Nghi-dinh-99-2019-ND-CPhuong-dan-thi-hanh-Luat-Giao-duc-dai-hoc-sua-doi-432145.aspx
4. Thông tư 04/2024/TT-BGDĐT – Hướng dẫn về vị trí việc làm lãnh đạo, quản
lý và chức danh nghề nghiệp trong các cơ sở giáo dục đại học.
https://thuvienphapluat.vn/van-ban/Lao-dong-Tien-luong/Thong-tu-04-2024-
TT-BGDDT-vi-tri-viec-lam-chuc-danh-trong-cac-co-so-giao-duc-dai-hoc578022.aspx