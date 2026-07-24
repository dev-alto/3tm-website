import Image from 'next/image'
import Link from 'next/link'

import { PerspectiveSurface } from './PerspectiveSurface'

import { FaInstagram, FaTwitter } from 'react-icons/fa'

interface ShelfItemProps {
    timestamp: string
    remark: string
    thumbnail: string
    sourceUrl: string
    index: number
}

const sourceToIcon = {
    'instagram.com': <FaInstagram />,
    'x.com': <FaTwitter />
}

const PLACEHOLDER_ITEMS = [
    {
        timestamp: '07/14/2026',
        remark: 'IS300 HOT CAR!!',
        thumbnail: '/assets/example_post_1.jpg',
        sourceUrl: 'https://www.instagram.com/p/DaycMJ3hm_J'
    },
    {
        timestamp: '07/12/2026',
        remark: `WEKFEST 2026
#wekfest #wekfestsj

TAG THE OWNERS‼️`,
        thumbnail: '/assets/example_post_2.jpg',
        sourceUrl: 'https://www.instagram.com/p/Datq513pOEc'
    },
    {
        timestamp: '07/09/2026',
        remark: '',
        thumbnail: '/assets/example_post_3.jpg',
        sourceUrl: 'https://www.instagram.com/p/DalYqXovrch'
    },
    {
        timestamp: '07/01/2026',
        remark: `Rooftops don't get any better than this!
-
-
Been a minute since this event but better late than never
`,
        thumbnail: '/assets/example_post_4.jpg',
        sourceUrl: 'https://www.instagram.com/p/DaRQDBFu5kW'
    },
]

const mapURLToIcon = function(url: string) {
    for (const [source, icon] of Object.entries(sourceToIcon)) {
        if (url.match(source)) {
            return icon
        }
    }

    return <p>n/a</p>
}

function ShelfItem({ timestamp, remark, thumbnail, sourceUrl, index }: ShelfItemProps) {
    return (
        <Link href={sourceUrl} target="_blank" media="">
            <PerspectiveSurface maxAngleX={10} maxAngleY={25}>
                <article className="group relative w-full h-[calc(100%+40px)] rounded-t-4xl text-shadow-black text-shadow-lg border-white/50 hover:border-white/75 hover:drop-shadow-[0_0_40px_#000] border-x-transparent border-x-2 border-t-2 hover:-translate-y-12 starting:translate-y-full active:scale-99 hover:scale-103 translate-y-0 transition-all duration-1000 hover:duration-300 hover:delay-0! delay-300" style={{transitionDelay: `${((index + 1) * 300) + 300}ms`}}>
                    <Image src={thumbnail ? thumbnail : '/assets/image.empty.webp'} width={300} height={300} alt="" className="w-full h-full object-cover rounded-t-4xl pb-8"></Image>
                    <div className="absolute bottom-0 w-full h-fit px-4 pt-4 pb-14 bg-linear-to-t from-black via-black to-transparent group-hover:to-black/45 transition-colors duration-1000">
                        <div className="w-full flex flex-row items-center justify-between text-xl">
                            <h1 className="font-bold font-conchin italic">{timestamp}</h1>
                            <div>{mapURLToIcon(sourceUrl)}</div>
                        </div>
                        <p>{remark}</p>
                    </div>
                    <div className="absolute bottom-0 w-full p-4 flex-row items-center justify-center gap-x-1 text-center break-all text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-xs md:text-sm">
                            <span className="italic">{`${sourceUrl}`}</span>
                            <span className="ml-1 group-hover:animate-pulse">🡽</span>
                        </p>
                    </div>
                </article>
            </PerspectiveSurface>
        </Link>
    )
}

export function MediaShelf() {

    // const [articles, setArticles] = useState<ShelfItemProps[]>(PLACEHOLDER_ITEMS)
    const articles = PLACEHOLDER_ITEMS

    const articleWidthPercentage = (1 / articles.length) * 100

    return (
        <section className="w-full h-[40%] flex flex-row hover:px-3 transition-all duration-1000">
        {articles.map((item, index) =>
            <article key={item.toString() + item.timestamp} style={{width: articleWidthPercentage + '%'}} className="min-w-72 snap-start hover:z-10">
                <ShelfItem timestamp={item.timestamp} remark={item.remark} thumbnail={item.thumbnail} sourceUrl={item.sourceUrl} index={index} />
            </article>
        )}
        </section>
    )
}