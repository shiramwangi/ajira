# Ajira - Job Platform

![WhatsApp Image 2025-05-30 at 18 07 31_32ff8f21](https://github.com/user-attachments/assets/8f8c7009-030f-406c-9aa6-a4f63204ec49)
![WhatsApp Image 2025-05-30 at 18 07 30_3ee0194b](https://github.com/user-attachments/assets/26e8d9d8-be72-4faa-8631-f9b69c9487b3)


A modern job platform built with Next.js, Prisma, and Clerk authentication.

## 🚀 Features

- User authentication with Clerk
- Job listings and applications
- Real-time chat between employers and applicants
- Modern UI with Tailwind CSS and shadcn/ui components
- TypeScript for type safety
- Prisma for database management

## 🛠️ Tech Stack

- **Frontend:** Next.js, React, TypeScript, Tailwind CSS, shadcn/ui
- **Backend:** Next.js API Routes
- **Database:** Prisma with PostgreSQL
- **Authentication:** Clerk
- **Real-time:** Pusher
- **Styling:** Tailwind CSS, shadcn/ui components

## 🚧 Known Issues

### 1. Clerk Authentication Middleware
There's an ongoing issue with the Clerk authentication middleware in `src/middleware.ts`. The error occurs when trying to use `authMiddleware` from `@clerk/nextjs`:
```TypeError: (0, _clerk_nextjs__WEBPACK_IMPORTED_MODULE_0__.authMiddleware) is not a function
```
This appears to be a module resolution issue between Next.js and Clerk. We're currently investigating solutions.

### 2. Module Resolution
We encountered issues with module resolution, particularly with:
- `@radix-ui/react-select`
- `@prisma/client`
These were resolved by ensuring proper installation and import paths.

### 3. Database Seeding
The initial database seeding process required careful handling of:
- Prisma client generation
- TypeScript configuration for seeding
- Foreign key constraints for job listings

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/shiramwangi/ajira.git
```

2. Install dependencies:
```bash
npm install
```

3. Set up your environment variables:
```bash
cp .env.example .env
```
Fill in your environment variables in `.env`

4. Generate Prisma client:
```bash
npx prisma generate
```

5. Run database migrations:
```bash
npx prisma migrate dev
```

6. Seed the database:
```bash
npm run db:seed
```

7. Start the development server:
```bash
npm run dev
```

## 🤝 Contributing

Contributions are welcome! If you'd like to help resolve any of the known issues or add new features, please:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Links

- [GitHub Repository](https://github.com/shiramwangi/ajira)
- [Issue Tracker](https://github.com/shiramwangi/ajira/issues)
