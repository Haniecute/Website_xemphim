# Các bước chạy và cài đặt Docker trên hệ điều hành MacOs

## Bước 1: Tạo file Dockerfile và khai báo các lệnh cơ bản như FROM, EXPOSE, RUN.....

```bash
touch Dockerfile
```

## Bước 2: Build Docker

```bash
docker build -t docker-website-xemphim:1.0.0 .
```

## Bước 3: Check các lịch sử

```bash
docker history docker-website-xemphim:1.0.0
```

## Bước 4: Chạy dự án

```bash
docker run -p 8800:8800 docker-website-xemphim:1.0.0
```

## Bước 5: Kiểm tra container

```bash
docker ps
```

# Các bước chạy và cài đặt Docker-compose trên hệ điều hành MacOs

## Bước 1: Tạo file docker-compose và kahi báo các services: mongo_db, api

```bash
touch docker-compose.yml
```

## Bước 2: Chạy docker-compose

```bash
docker compose up
```

## Bước 3: Để xem các container chứa

```bash
docker ps -a
```

# Cài đặt và triển khai CI/CD

### Bước 1: Khởi tạo repository và có branch default là main

### Bước 2: Tạo .github/workflows/nodejs.yml

### Bước 3: Thêm các Events,jobs, runner, steps, actions trong nodejs.yml

### Bước 4: Vào github actions và run and xử lý workflows

### Bước 5: Các coder sẽ push tính năng lên branch my_branch_new để các thành viên trong nhóm đều biết mình chỉnh sửa những gì. Sau đó sẽ merge từ my_branch_new sang branch main

### Bước 6: Hệ thống sẽ test source code, nếu Pass thì deploy code lên production server

### Bước 7: Xem lại các merge request, test nếu OK thì tiến hành deploy các thay đổi lên môi trường production

# Phân chia công việc

1. Võ Văn Khánh (coder API, Client: src/authContext, src/Components tester and leader )
2. Nguyễn Thị Hạnh (coder Admin: src/context, Client: src/pages/home,src/pages/login)
3. Đinh Thanh Thuỷ (coder Admin: src/pages, Client: src/pages/play)
4. Bùi Đức Nghĩa (coder Admin src/components, Client: src/pages/watch,src/pages/register)
5. Đỗ Duy Hùng (player)
