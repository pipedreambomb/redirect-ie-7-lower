Package.describe({
	description: "Detect IE7 or lower and redirect to a page explaining no support.",
});

Package.on_use(function (api, where) {
	where = where || ['client'];

	api.add_files('lib/noie.js', where);
});
