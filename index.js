import {getHTML,
        getInstagramCount,
        getTwitterCount}
        from "./app/scraper";

import express from 'express';

const app = express();

app.get('/scrape' , async (req, res, next) => {
        console.log('running')
        const [iCount, tCount] = await Promise.all([
                getInstagramCount(),getTwitterCount()
        ]);
        console.log(iCount,tCount)
        res.json({iCount, tCount})
});

app.listen(4000, () => {
        console.log('running')
})

