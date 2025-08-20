# Sử dụng Node.js 18 làm base image
FROM node:18-alpine AS builder

# Thiết lập working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY pnpm-lock.yaml ./

# Cài đặt dependencies
RUN npm install -g pnpm
RUN pnpm install

# Copy source code
COPY . .

# Build ứng dụng
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy build files từ builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
