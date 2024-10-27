import React from 'react'

function Card({username, position="Software developer"}){
    return(
        <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img class="w-24 h-24 rounded-full mx-auto object-cover" src="person.png"/>
  <div class="pt-6 space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption>
      <div>
        {username}
      </div>
      <div>
        {position}, Algolia
      </div>
    </figcaption>
  </div>
</figure>
    )
}

export default Card