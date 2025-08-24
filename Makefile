.PHONY locs
locs:
	npx wrangler secrets-store secret create 2e9e787b97664651880b5aa0af80639a --name SUPER_SECRET --scopes workers
