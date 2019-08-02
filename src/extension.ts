import * as vscode from 'vscode'

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('mdcomp-scaffolding.generateEntity', () => {
        vscode.window.showInformationMessage('Generating entity (sort of)...')
    })

    context.subscriptions.push(disposable)
}

export function deactivate() {}