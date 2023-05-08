<!--  Các bước chạy và cài đặt Docker trên hệ điều hành MacOs -->

Bước 1: Tạo file Dockerfile và khai báo các lệnh cơ bản như FROM, EXPOSE, RUN.....
touch Dockerfile
Bước 2: Build Docker
docker build -t docker-website-xemphim:1.0.0 .
Bước 3: Check các lịch sử
docker history docker-website-xemphim:1.0.0
Bước 4: Chạy dự án
docker run -p 8800:8800 docker-website-xemphim:1.0.0
Bước 5: Kiểm tra container
docker ps

<!--  Các bước chạy và cài đặt Docker-compose trên hệ điều hành MacOs -->

Bước 1: Tạo file docker-compose và kahi báo các services: mongo_db, api
touch docker-compose.yml
Bước 2: Chạy docker-compose
docker compose up
Bước 3: Để xem các container chứa
docker ps -a
