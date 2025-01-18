# Stakk Finance Frontend

This project is a modern frontend application built with Next.js, Tailwind CSS, TypeScript, and shadcn/ui. It features a centralized theming system for consistent and easy-to-manage styling across the entire application.

## 🔄 Session Context Preservation

To maintain context across sessions, provide these files:
```bash
README.md theme.ts tailwind.config.ts shadcn-theme.ts src/components/theme-provider.tsx src/app/layout.tsx next.config.ts postcss.config.mjs src/app/page.tsx src/lib/utils.ts src/hooks/useHeader.tsx src/hooks/useSample.tsx .eslintrc.json tsconfig.json components.json src/components/common/Header.tsx src/components/landing-sections/Hero.tsx src/components/landing-sections/AppShowcase.tsx src/components/landing-sections/WhyStakkSection.tsx
```

These files provide:
- Theme configuration and styling system
- Core layout and routing
- Main page components
- Shared utilities and hooks
- Development environment configuration

For additional context about specific features or components, please provide:
- The component's path
- A brief description of its purpose
- Any relevant implementation details

## 🎨 Centralized Theming

Our theming system allows for easy color management and consistency across the entire application. Here's how it works:

1. Colors are defined once in `theme.ts`
2. These colors are used in both Tailwind and shadcn/ui configurations
3. The theme is applied via a `ThemeProvider` component

### Key Files

- `theme.ts`: Central color definitions
- `tailwind.config.ts`: Tailwind configuration
- `shadcn-theme.ts`: shadcn/ui theme mapping
- `components/theme-provider.tsx`: Theme application
- `app/layout.tsx`: Root layout with ThemeProvider

## 🚀 Getting Started

To run the project locally:

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

- `src/hooks`: Custom React hooks. Use `useSample.tsx` as a template for new hooks.
- `src/components`: React components. Use CamelCase for component names.
- `public`: Static assets

## 🎨 Editing / Adding Colors

To edit or add colors to the theme:

1. Open `theme.ts`
2. Modify the `colors` object. For example:

```typescript
export const colors = {
  primary: { DEFAULT: '#3b82f6', foreground: '#ffffff' },
  secondary: { DEFAULT: '#10B981', foreground: '#ffffff' },
  // Add more colors as needed
};
```

3. After modifying `theme.ts`, the changes will automatically reflect in both Tailwind and shadcn/ui themed components.

## 🛠 Development

- Use TypeScript for type-safe code
- Follow the established naming conventions for hooks and components
- Place new assets in the `/public` folder
- Utilize the centralized theming system for consistent styling

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
