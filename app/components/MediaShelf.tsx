// 'use client'

import Image from 'next/image'
import Link from 'next/link'

// import { useState } from 'react'

interface ShelfItemProps {
    title: string
    remark: string
    thumbnail: string
    sourceUrl: string
}

const PLACEHOLDER_ITEMS = [
    {
        title: 'LATEST RELEASE ON 08/08/2026',
        remark: 'alpha bravo charlie',
        thumbnail: '',
        sourceUrl: 'https://www.google.com'
    },
    {
        title: 'SAMPLE ARTICLE NAME (TRUE)',
        remark: 'delta echo foxtrot',
        thumbnail: '',
        sourceUrl: 'https://www.google.com'
    },
    {
        title: 'CONTENT DROP ON INSTAGRAM ',
        remark: 'golf hotel india',
        thumbnail: '',
        sourceUrl: 'https://www.google.com'
    },
    {
        title: 'RECRUITING TALENT (PHOTO/VIDEO) ',
        remark: 'juliet kilo lima',
        thumbnail: '',
        sourceUrl: 'https://www.google.com'
    }
]

function ShelfItem({ title, remark, thumbnail, sourceUrl }: ShelfItemProps) {
    return (
        <Link href={sourceUrl} target="_blank">
            <article className="relative w-full h-full">
                <Image src={thumbnail ? thumbnail : "/assets/image.empty.webp"} width={300} height={300} alt="" className="w-full h-full object-cover"></Image>
                <div className="absolute bottom-0 w-full h-fit p-4 bg-linear-to-t from-black to-transparent backdrop-blur-xs">
                    <h1 className="font-bold text-xl font-conchin italic">{title}</h1>
                    <h2>{remark}</h2>
                </div>
            </article>
        </Link>
    )
}

export function MediaShelf() {

    // const [articles, setArticles] = useState<ShelfItemProps[]>(PLACEHOLDER_ITEMS)
    const articles = PLACEHOLDER_ITEMS

    const articleWidthPercentage = (1 / articles.length) * 100

    return (
        <section className="w-full h-[40%] flex flex-row snap-mandatory snap-x overflow-x-auto">
        {articles.map((item) =>
            <article key={item.toString() + item.title} style={{ width: articleWidthPercentage + '%' }} className="min-w-72 snap-start">
                <ShelfItem title={item.title} remark={item.remark} thumbnail={item.thumbnail} sourceUrl={item.sourceUrl} />
            </article>
        )}
        </section>
    )
}