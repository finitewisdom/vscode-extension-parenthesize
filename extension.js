const vscode = require( "vscode" );

/**
 * @param {vscode.ExtensionContext} context - Context for the extension itself
 */
function activate( context ) {

    [
        "parenthesize.parenthesizeWithSpacing", 
        "parenthesize.parenthesizeWithoutSpacing",
        "parenthesize.curlyBracketizeWithSpacing", 
        "parenthesize.curlyBracketizeWithoutSpacing",
        "parenthesize.squareBracketizeWithSpacing", 
        "parenthesize.squareBracketizeWithoutSpacing",
        "parenthesize.angleBracketizeWithSpacing", 
        "parenthesize.angleBracketizeWithoutSpacing",
    ].forEach( ( command ) => {
        const
            disposable = vscode.commands.registerCommand( command, function() {
                vscode.commands.executeCommand( "editor.action.insertSnippet", { "name": command } );
            } );
        context.subscriptions.push( disposable );	
    } );
}

function deactivate() {
    //  nothing to do
}

module.exports = { activate, deactivate };
