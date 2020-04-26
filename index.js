import {getHTML, getTwitterFollowers, getInstaggramFollowers} from "./app/scraper";

async function go() {
        const iPromise = await getHTML('https://www.instagram.com/farisdx66');
        const tPromise = await getHTML('https://www.twitter.com/farisdx66');
        const [instagramHTML, twitterHTML] = await Promise.all(
            [iPromise,tPromise]
        );
        const twitter = await getTwitterFollowers(twitterHTML);
        const instagram = await getInstaggramFollowers(instagramHTML);
        console.log(`twitter follower ${twitter} and instagram follower ${instagram}`)
}

go();


