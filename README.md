<img src="http://i1-news.softpedia-static.com/images/news2/telegram-adds-video-player-and-drafts-on-android-and-ios-apps-505276-2.jpg" width="150"><img src="https://appmetrica.yandex.com/ogimage.png" width="180"><img src="https://cdn.joinhoney.com/images/lp/store-logos/herokuapp-logo.png" width="140">
----

This boilerplate includes a starter set of tools to build a 🤖Telegram bot from scratch in no time:
1. *[NTBA](https://github.com/yagop/node-telegram-bot-api)* - Telegram Bot API for NodeJS.
2. *[Botan.io](http://botan.io/)* - analytics by AppMetrica for your Telegram bot.
3. *[Heroku](https://www.heroku.com/)* - cloud platform for application deployment.

## Getting Started 🛠
```bash
# Get the latest snapshot
git clone https://github.com/txwkx/node-telegram-bot-boilerplate.git myBot

# Change directory
cd myBot/

# Install NPM dependencies
npm install

# Or, if you prefer to use `yarn` instead of `npm`
yarn install
```

## Telegram 🗞
1. Send [@BotFather](https://telegram.me/botfather) a `/newbot` message
2. Pick *name* and *username* (e.g., Fitness Trainer + *myFitness_bot*)
3. Receive a **BOT_TOKEN**;

## Metrics 📊
1. Create an [AppMetrica account](https://appmetrica.yandex.com)
2. Click `+ Add application` button.
> ! Set the application name to be same as the bot username
3. Enter *application name* (e.g., *@myFitness_bot*)
4. Receive an API KEY aka **METRICS_TOKEN**;

## Hacking 👩🏻‍💻 👨🏼‍💻
1. Insert the **BOT_TOKEN** in *config.js*
2. Run `npm run dev` to start the bot in **development** mode
3. Do the magic 👾

This project includes examples of handling:
* Commands
* Keyboards
* Inline keyboards
* Payments (*soon*)

## Deployment 🛳
1. Create a [Heroku account](https://www.heroku.com/)
2. Install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
3. Create a [new app](https://dashboard.heroku.com/new-app) from Heroku WebGUI
> ! Run the following commands from the console
4. `heroku login`
5. `heroku git:remote -a *app_name_on_heroku*`
> ! The next step could be done from Heroku app **Settings**: -> *Reveal Config Vars* -> add [*KEY* = *VALUE*] pairs.
6. Setup config variables
   ```bash
    heroku config:set TOKEN=BOT_TOKEN
    heroku config:set METRICS=METRICS_TOKEN
    heroku config:set APP_URL=$(heroku info -s | grep web_url | cut -d= -f2)
    ```
7. `git add * && git commit -m "my smart comment"`
8. `npm run deploy` or `git push heroku master`

## Congrats!✨🎉
Now your bot is up and running. (If not - check Heroku **View logs**)

Be sure to follow the latest updates at [Telegram bots API](https://core.telegram.org/bots/api).

In case you want to share your bot - try publishing it at [StoreBot](https://storebot.me/).

## Contributing 🗳
If you have any suggestion on how to improve the boilerplate or faced any issues feel free to [contact me](https://github.com/txwkx/node-telegram-bot-boilerplate/issues).
