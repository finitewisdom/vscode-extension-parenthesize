// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	var disposable;

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "helloworld" is now active!');

	disposable = vscode.commands.registerCommand( "helloworld.parenthesizeWithSpacing", function () {
		vscode.commands.executeCommand( "editor.action.insertSnippet", { "name": "Parenthesize With Spacing" } );
	} );
	context.subscriptions.push(disposable);

	disposable = vscode.commands.registerCommand( "helloworld.parenthesizeWithoutSpacing", function () {
		vscode.commands.executeCommand( "editor.action.insertSnippet", { "name": "Parenthesize Without Spacing" } );
	} );
	context.subscriptions.push(disposable);

	// // The command has been defined in the package.json file
	// // Now provide the implementation of the command with  registerCommand
	// // The commandId parameter must match the command field in package.json
	// let disposable = vscode.commands.registerCommand('helloworld.helloWorld', function () {
	// 	vscode.window.showInformationMessage('Hello World from Josh\'s HelloWorld!');
	// });

	// context.subscriptions.push(disposable);
}

exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
