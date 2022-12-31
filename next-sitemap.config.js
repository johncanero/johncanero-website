/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://johncanero-website.vercel.app/',
    generateRobotsTxt: true,  
    outDir: "./out"
  }