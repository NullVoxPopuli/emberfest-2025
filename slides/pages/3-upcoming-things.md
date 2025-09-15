---
title: Upcoming Stuff
transition: none
---



<img style="position: absolute; top: 0; right: 0;" src="/images/kpdh/whats-next-2.webp" />

<img v-click style="position: absolute; top: 0; right: 0;" src="/images/kpdh/whats-next.webp" />

<h1 style="position: absolute; top: 10rem; font-size: 3rem; line-height: 3.5rem;">
	What's coming<br> up next?
</h1>

<!-- 

Alight -- 

so what's coming up next for ember?

*I* want to enable more experimentation.

Not just for me, because I think it's fun, but for everyone.

[click] So that everyone can can experiment and use ember in more than just web apps. 

So.. I have a plan

-->


---
title: Upcoming Stuff
transition: none
---


<div style="display: grid; gap: 0rem; grid-template-columns: 1fr 1fr">

<QRLink inline="true" href="https://github.com/emberjs/rfcs/pull/1122" label="Resources"/>
<QRLink inline="true" href="https://github.com/emberjs/rfcs/pull/1071" label="cell()" />

</div>	



<!-- 

3 years ago, I said I would write the resources RFC. And, I finally did it a couple months ago.

I've also opened a Cell RFC.

Both of these were in relation to Starbeam, and trying to align Starbeam's efforts with how Ember
works today -- incrementally adding features to Ember until we were suddenly starbeam.

But in opening these RFCs, more questions have been raised about the core of our framework.
These RFCs' were sort of implementation-defined rather than public-API defined. 

Like, we can say
at a high level what happens. But we haven't been able to describe in any deeper detail without
diving in to private APIs.

-->


---
title: Upcoming Stuff
transition: none
---

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; align-centent: center; align-items: center;">
<img src="/images/private-api.png" style=""/>

<h1>glimmer-vm</h1>

</div>

<!--

All of glimmer-vm is private.

We need public APIs so we can assure that 

the described and well tested behavior of those public APIs 

does not break anything for our users in the future. 

.....

So, to say my dream for Ember has gotten a little ambitious is perhaps an understatement, 


-->

---
title: Upcoming Stuff
transition: none
---


<ThePlan />

<span v-click style="position: absolute; bottom: 1rem; left: 1rem; max-width: 250px;">All of this is hugely aspirational<br>
(for now)</span>


<!--

but I think it is still achievable -- def not by myself doing each of these bottom integrations here, 
but working with the community to adapt ember's architecture to work with _everything.._


We want to be able to explore swapping out our current renderer, the GlimmerVM.

I want to continue the exploration that Starbeam started,  

as well as the research in Glimmer Next so that we can not only boost our base rendering speed 

but also compete on render performance with our peer frameworks, 

[click] **as well as** also become a universal framework (without changing any public API). 



In particular, for my own side projects, I make a lot of dinky CLI apps, 

and would like to use ember in a CLI environment -- beyond the demo I showed just a little bit ago -- but serious CLI apps. 

I also have had a bit of a itch to explore 3D or gaming environments, as web interfaces are, to be
reductive, just rectangles.

With TC39's Signals, and Starbeam's research, and with how long it takes all the frameworks to coalesce 

(and with how everyone currently has different reactivity (even if everyone calls things signals, they behave different from each
other and are different APIs entirely)), 

Ember can become the universal glue and orchestrator in all the chaos that is the
broader JS ecosystem.

RFCs and community collaboration pending, of course.

and now that Vite is shipped, a lot more opportunities are open to us 


-->
