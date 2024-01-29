# Return to Office Calculator

Calculate the personal costs of your company's Return to Office policy. Based on the assumed costs of your lost spare time due to commuting and real additional costs that you need to spend to make the return to office work.

It currently uses a lot of assumptions and simplifications and lacks a lot of scenarios, so use with caution. :)

Basics:
- Focus on Germany, will probably generate even more inaccurate results for other companies
- No part-time support yet
- Calulation for costs of spare time based on your salary per hour before taxes and social security (230 working days, 8 hours per day)
- Real costs per ride and additional costs need to be paid from salary after taxes and social security. Therefore, this sum is multiplied by 2 and added to the virtual cost of your spare time

## Authors

Sebastian J. Wolf [sebastian@ygriega.de](mailto:sebastian@ygriega.de)

## License

Licensed under Apache 2.0

## Build

This project uses [Node.js](https://nodejs.org/) and its package manager `npm`. 

To install dependencies please use the command `npm install`. To run the local test server, use `npm run dev`.

For a production deployment, you need to generate the respective files using `npm run build`. The generated files are copied to the folder `dist`.

## Contribute

Everyone can [create issues](https://github.com/Wunderfitz/rto-calculator/issues) if you find a bug and or have feature requests, even if you are not a developer.
If you want to contribute bug fixes, improvements, new features etc. please create a [pull request (PR)](https://github.com/Wunderfitz/rto-calculator/pulls). PRs are always welcome and will be reviewed as soon as possible, but may take some time. :)

## Credits

This project uses
- [UI5 Web Components](https://sap.github.io/ui5-webcomponents/) - Great set of UI components, great documentation
- [Vite](https://vitejs.dev/) - Awesome development environment for the web


