// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
	devtools: { enabled: true },
	css: ["~/assets/css/main.css", "~/assets/css/blog.css"],

	nitro: {
		firebase: {
			gen: 2,
		},
		preset: "netlify-legacy",
	},

	app: {
		head: {
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
		},
	},

	routeRules: {
		"/": { prerender: true },
		"/blog": {
			isr: 3600,
		},
		"/blog/**": {
			isr: 3600,
		},
	},

	experimental: {
		asyncContext: true,
	},

	modules: ["nuxt-security"],
	security: {
		corsHandler: {
			origin: [
				"https://droemmehavet.dk/",
				"https://blog.droemmehavet.dk/wp-json/wp/v2/media",
				"https://blog.droemmehavet.dk/wp-json/wp/v2/users",
				"https://blog.droemmehavet.dk/wp-json/wp/v2/posts/?_fields=author,id,date,title,link,content,featured_media,excerpt",
				"https://script.google.com/macros/s/AKfycbyg_27lTfzhOBCo_I9vcWWC1XYmhHKoD6mk-o4sfMK6u8EfVCVIt4hu6CFVxEhvkYgeDg/exec",
				"https://hook.eu2.make.com/3xg02xvfq3x4cenexbrwdbn78i4xc1a8",
				"http://localhost:3000",
			],
			useRegExp: true,
			allowHeaders: "*",
		},
		headers: {
			contentSecurityPolicy: {
				"img-src": [
					"'self'",
					"data:",
					"https://blog.droemmehavet.dk/wp-content/",
				],
			},
		},
	},
});
