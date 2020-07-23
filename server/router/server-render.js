const ejs = require('ejs');

module.exports = async (ctx,renderer,template) => {
    ctx.headers['Content-Type'] = 'text/html';
    const context = {url:url.path};

    try{
        const appString = await renderer.renderToString(context);
        const html = ejs.render(template,{
            appString,
            style:context.renderStyles(),
            scripts:context.renderScripts()
        })
    }catch(err){
        console.log('render err');
    }
}













