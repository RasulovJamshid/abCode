
## Description
<section id='description'>
Siz CSS-da <code>height</code> xususiyatidan foydalanib, elementning balandligini belgilashingiz mumkin, bu <code>kengligi</code> xususiyatiga o'xshash. Rasm balandligini 20px ga o'zgartiradigan misol:

```css
img {
  height: 20px;
}
```

</section>

## Instructions
<section id='instructions'>
Add a <code>height</code> property to the <code>h4</code> tag and set it to 25px.
<strong>Note:</strong> You may need to be at 100% zoom to pass the test on this challenge.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should change the <code>h4</code> <code>height</code> property to a value of 25 pixels.
    testString: assert(Math.round(document.querySelector('h4').getBoundingClientRect().height) === 25 && /h4{\S*height:25px(;\S*}|})/.test($('style').text().replace(/\s/g ,'')));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  h4 {
    text-align: center;

  }
  p {
    text-align: justify;
  }
  .links {
    margin-right: 20px;
    text-align: left;
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<style>
  h4 {
    text-align: center;
    height: 25px;
  }
  p {
    text-align: justify;
  }
  .links {
    margin-right: 20px;
    text-align: left;
  }
  .fullCard {
    width: 245px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px 5px;
    padding: 4px;
  }
  .cardContent {
    padding: 10px;
  }
</style>
<div class="fullCard">
  <div class="cardContent">
    <div class="cardText">
      <h4>Google</h4>
      <p>Google was founded by Larry Page and Sergey Brin while they were Ph.D. students at Stanford University.</p>
    </div>
    <div class="cardLinks">
      <a href="https://en.wikipedia.org/wiki/Larry_Page" target="_blank" class="links">Larry Page</a>
      <a href="https://en.wikipedia.org/wiki/Sergey_Brin" target="_blank" class="links">Sergey Brin</a>
    </div>
  </div>
</div>
```

</section>
