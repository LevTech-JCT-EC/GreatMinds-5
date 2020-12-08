import { Component } from '@angular/core'
import { Lambda } from '../../services/lambda'

interface IListItem
{
    id?: string
    name?: string
    amount?: number
    checked?: boolean
}

@Component
({
    selector: 'app-root',
    templateUrl: './root.page.html',
    styleUrls: [ './root.page.scss' ]
})
export class ApplicationRootPage
{
    constructor(private lambda: Lambda) 
    {
        // you may use this url address, or create your own
        this.lambda.url('https://q73ghc27h4.execute-api.us-east-1.amazonaws.com/hack1-v1')

        this.lambda.run('read',
        {
            table_name: 'kiexv1lh'

        }).then(list => 
        {
            this.list = list.Items
        })
    }

    public list: Array<IListItem>

    addNewItem()
    {
        this.list.push({ }) // append a new empty item to my list
    }
}
