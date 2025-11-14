# ETemplin Website Codebase

Code for website to be used for templating/an example for others.

---

## 📑 References

Template use from [**Cloudflare Workers**](https://developers.cloudflare.com/workers/):

```bash
npm create cloudflare@latest -- --template=cloudflare/templates/vite-react-template
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/CodeNeedsCoffee/CodeNeedsCoffee-Site.git
```

Navigate to the project directory:

```bash
cd CodeNeedsCoffee-Site
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

---

## 💾 Production

Build your project for production:

```bash
npm run build
```

Preview your build locally:

```bash
npm run preview
```

Deploy your project to Cloudflare Workers:

```bash
npm run build && npm run deploy
```

Monitor your workers:

```bash
npx wrangler tail
```

---

## 📜 License

This project is licensed under the [MIT License](./LICENSE).

---

## Additional Resources

- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Vite Documentation](https://vitejs.dev/guide/)
- [React Documentation](https://reactjs.org/)
- [Hono Documentation](https://hono.dev/)
