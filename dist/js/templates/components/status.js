const status_template = `
    <div class="alert alert-{{type}} {{#hidden}}hidden{{/hidden}} " >
        <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
        <b>{{title}}</b> 
        {{#set}}<br/>{{/set}}
        {{message}}
    </div>
`

