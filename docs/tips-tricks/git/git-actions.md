---
id: git-actions
sidebar_position: 2
sidebar_label: Git Pages & Actions
---

# My deployment journey

It all started when I was looking to build CI-CD for this website thecodebuffet.com. My docusaurus application was working in local and now I was looking to find the best solution for deploying it in public domain. There were couple of decision I had to take now:
- What is going to be my deployment platform
- How can I automate my deployments

Let me share my thought process and my end state solution:

## Deployment Platform - Github Pages

I started to look around for what could be the cheapest and most convenient way of deploying my website. Just to put things in perspective, my Docusaurus website is built over react framework, so it is single page application but not a static website. What it means that it has to be built before it can be deployed.

Now having worked a lot with AWS, my first inclination was to use AWS for deployment. I was thinking of few options there :
- Get a small EC2 machine and deploy application there
- Containerize the app and deploy in ECS or EKS
- Deploy in s3 with Cloudfront CDN

The third option is what I was leaning towards before a thought came to my mind that do I really need to make it so complex. Are there options to may be host my website for free. I was aware that I can do it free on heroku but there are restrictions which I didn't like. So I started what we all do.. GOOGLING and I stumbled upon an option of using Github pages for free. I liked the option of exposing my application directly from Github for free but still wasn't too sure that is the best option. The reasons I was doubtful were again few limits and guidance on usage.

- *Prohibited usage* : Github prohibits usage of Github Pages for any online business, e-commerce or any website which trying to make money. 
- *Usage Limits* : There are few limits to the size of the source code which should be no more than 1GB as well as there is a soft bandwidth limit of 100GB/month
- *Public repo* : It only allows public repositories to use it for free but for private ones, you need a pro account.

Looking at what I was trying to do is to expose a simple knowledge site which will take ages to get to 1 GB and I wanted to keep it public anyways. So all my checkboxes were ticked in a way and I decided to give it a shot. If it doesn't work for some reason, my AWS option 3 was always open.

Now that I decided on deployment platform, my next challenge was how to automate deployments to Github pages.

## CI/CD : Github Actions

Before I zeroed down on Github Pages and while I was thinking of AWS, there was a parallel thought which was bothering me. That was around my deployment automations. So I was thinking that if go AWS way I would need a tool through which I can create a deployment pipleline as well as to setup my infra. I have used both CloudFormation and Terraform for provisioning infrastructure but the missing piece was that platform on which this pipelines of provisioning + deployment should execute on.

I had extensive experience with Gitlab and Jenkins but for both of them I need some infrastructure to work as Gitlab runner or to host the Jenkins as a tool. Like I mentioned above, I was hesitating to create and maintaining environment to run my CI/CD. So I started looking into SaaS offerings the first thought was to use AWS codepipeline but I have worked with it before and I never liked it. There were couple more which were in my radar like CircleCI and Codeship but they offer very limited features with free version.

And that's where I also found an option of using Github Actions. It immedeately sounded like a perfect solution as an all Github ecosystem cuts down lot of complexity around maintainance and obviously cost. Just going through couple of blog, it reaffirmed that the integration with Github pages is quite simple and straightforward. It is important to highlight some limitations though as long as free plan is concerned:

- It allows 2000 automation minutes/month
- Package storage limit is 500MB
- Only supports Windows, Ubuntu and Mac as operating system

All these limits were quite adequate for me as I am going to publish few articles every month which are never going to hit limits of 2000 minutes. Package size like I mentioned earlier is quite small (just few MBs) and I was all fine to use Ubuntu as OS. So again all boxes ticked. 

One more thing which I liked when I started learning about Github actions, it's approach and somewhat syntax was similar to Gitlab which I was already comfortable with, so I didn't took me much time to configure my pipeline. There are also many pre-created templates which you can start your pipeline with and modify as per your need.

Here is how thecodebuffet.com pipeline works with Github actions https://github.com/SukhmeetSethi/thecodebuffet/blob/master/.github/workflows/ci.yml

:::info
Docusaurus provides out of the box support to deploy in Github pages through gh-pages plugin but in case you are creating your own site, you can add gh-pages node plugin.
:::

Don't want to recreate what is already there, so please follow this tutorial to deploy your react app in github pages using github actions: https://dev.to/achukka/deploy-react-app-using-github-actions-157d