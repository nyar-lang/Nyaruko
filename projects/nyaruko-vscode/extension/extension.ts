import * as vscode from 'vscode'
import { Completion } from './completion'

function activate(context: any) {
    vscode.languages.registerCompletionItemProvider('nyar', new Completion())
}


function deactivate() {
    console.log('deactivated')
}

export { activate, deactivate }