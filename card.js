#!/usr/bin/env node

'use strict'

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What you want to do?",
        choices: [
            {
                name: `Send me an ${chalk.greenBright.bold("Email")}?`,
                value: () => {
                    open("mailto:makwanashyam6@gmail.com");
                    console.log(chalk.green.bold("\nDone, see you soon at inbox.\n"));
                }
            },
            {
                name: `Check my ${chalk.magentaBright.bold("Resume")}?`,
                value: () => {
                    open('https://bit.ly/Shyam-Resume');
                    console.log(chalk.magentaBright.bold("\nThanks for viewing my resume.\n"));
                }
            },
            {
                name: `Wanna know about ${chalk.redBright.bold("Myself")}?`,
                value: () => {
                    open('https://www.linkedin.com/in/shyammakwana');
                    console.log(chalk.redBright.bold("\nThanks for viewing my profile.\n"));
                }
            },
            {
                name: `Say ${chalk.yellowBright.bold("Goodbye")}?`,
                value: () => {
                    console.log(chalk.yellowBright.bold("\nHasta la vista.\n"));
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.whiteBright("                  Shyam Makwana"),
    work: chalk.gray("CS Grad Student @ ") + chalk.bold.greenBright("IUB"),
    twitter: chalk.gray("https://twitter.com/") + chalk.bold.yellowBright("ShyamMakwana_"),
    github: chalk.gray("https://github.com/") + chalk.bold.blueBright("Shyam-Makwana"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.bold.redBright("shyammakwana"),
    web: chalk.gray("https://bit.ly/") + chalk.bold.cyanBright("ShyamMakwana"),
    npx: chalk.gray("npx") + " " + chalk.bold.magentaBright("shyaam"),

    labelWork: chalk.white.bold("            "),
    labelTwitter: chalk.white.bold("    Twitter:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelWeb: chalk.white.bold("        Web:"),
    labelCard: chalk.white.bold("       Card:")
};

const me = boxen(
    [
        `${data.name}`,
        ``,
        `${data.labelWork}  ${data.work}`,
        ``,
        `${data.labelTwitter}  ${data.twitter}`,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelLinkedIn}  ${data.linkedin}`,
        `${data.labelWeb}  ${data.web}`,
        ``,
        `${data.labelCard}  ${data.npx}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "white"
    }
);

console.log(me);
const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");
console.log(tip);

prompt(questions).then(answer => answer.action());
