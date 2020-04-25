import React from "react"
import Head from "next/head"
import Markdown from "react-markdown"
import PostDate from "../../components/PostDate"
import Author from "../../components/Author"

export default function Post({ post }) {
  return (
    <>
      <Head>
        <title>{post.title} | Hey Mike</title>
      </Head>
      <article>
        <header>
          <h1>{post.title}</h1>
          <PostDate date={post.publishDate} />
        </header>
        <section>
          <Markdown source={post.body} escapeHtml={true} />
        </section>
        <footer>
          <Author
            name="Mike Robinson"
            title="I build apps and stuff for the web."
            avatar="https://avatars2.githubusercontent.com/u/243422?s=460&v=4"
          />
        </footer>
        <style jsx>{`
          header h1 {
            font-family: "Passion One", sans-serif;
            font-size: 3rem;
            font-weight: 400;
          }
          section :global(p) {
            line-height: 1.75rem;
            margin-bottom: 2rem;
          }
        `}</style>
      </article>
    </>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      post: {
        id: 2,
        slug: "really-cool-post",
        title: "This is a post",
        description: "And it is so cool",
        publishDate: "2020-04-25T20:31:55.448Z",
        body: `
## Hey gang!

I'm baby williamsburg umami tilde pour-over, occupy twee cold-pressed swag flexitarian marfa keytar knausgaard. 90's mumblecore direct trade blue bottle freegan poutine vexillologist cliche meh iPhone synth green juice tattooed chia. Biodiesel distillery meh, man bun humblebrag sustainable scenester trust fund four loko brooklyn. Taxidermy semiotics af crucifix. Literally polaroid lyft synth readymade skateboard coloring book direct trade sartorial. Meh normcore fixie, street art marfa occupy brooklyn YOLO la croix aesthetic you probably haven't heard of them jean shorts. Scenester sustainable edison bulb mlkshk whatever.

Coloring book four loko tacos squid narwhal shaman gluten-free, waistcoat VHS live-edge heirloom single-origin coffee hoodie. Synth polaroid pug cold-pressed vegan. Shabby chic lumbersexual meggings synth, brunch ramps listicle migas quinoa. Edison bulb banh mi gluten-free, leggings disrupt gochujang thundercats plaid flexitarian authentic. Quinoa pabst vaporware banjo affogato vice crucifix fam man braid polaroid four loko man bun truffaut godard. Actually blue bottle hell of yuccie tumeric lo-fi iceland.

Kogi blog tumeric pickled austin whatever cardigan tofu mlkshk ugh art party banjo shoreditch. Knausgaard echo park jianbing copper mug photo booth fingerstache swag williamsburg affogato asymmetrical cronut truffaut squid migas. Art party direct trade mlkshk quinoa banjo ethical jianbing blog four dollar toast. Thundercats mumblecore selvage semiotics. Tumeric hell of selvage paleo unicorn seitan wayfarers roof party fingerstache. Migas woke narwhal, franzen seitan stumptown kogi 8-bit.

Succulents listicle hot chicken small batch paleo. Blog la croix mlkshk before they sold out actually banh mi jean shorts hashtag art party prism man bun. Schlitz af skateboard, hammock cray fingerstache tilde franzen migas polaroid pabst copper mug. Seitan dreamcatcher tofu poutine, subway tile portland truffaut bitters put a bird on it. Microdosing air plant bushwick coloring book before they sold out cold-pressed. Normcore letterpress umami man bun pork belly etsy church-key cliche shaman art party gastropub. 8-bit prism hell of, knausgaard venmo vexillologist authentic etsy copper mug brooklyn.

Cronut chicharrones organic typewriter wolf, 90's godard occupy vegan. Everyday carry humblebrag jianbing fam neutra, prism squid pour-over disrupt raclette literally pitchfork. Occupy forage fashion axe, cliche fingerstache hella distillery farm-to-table gastropub artisan franzen. Gentrify shabby chic prism, polaroid deep v pop-up tbh next level wayfarers master cleanse neutra pug gluten-free sriracha. Hot chicken cold-pressed photo booth XOXO vegan banjo meditation church-key selfies.

        `,
      },
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: "really-cool-post" } }],
    fallback: true,
  }
}
