import { getFooterData } from '@/lib/strapi/footer'
import Image from 'next/image'
import Link from 'next/link'
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaXTwitter,
} from 'react-icons/fa6'
import { LuMail, LuPhone, LuMapPin } from 'react-icons/lu'

const getSocialIcon = (label: string) => {
  const size = 28
  switch (label.toLowerCase()) {
    case 'facebook':
      return <FaFacebookF size={size} />
    case 'youtube':
      return <FaYoutube size={size} />
    case 'instagram':
      return <FaInstagram size={size} />
    case 'tiktok':
      return <FaTiktok size={size} />
    case 'twitter':
      return <FaXTwitter size={size} />
    default:
      return null
  }
}

export default async function Footer() {
  const footerData = await getFooterData()
  if (!footerData) return null

  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL
  const { logo, mail, phone, location, copyright, socialMedia } = footerData
  const { url, alternativeText, width, height } = logo
  const logoURL = `${STRAPI_URL}${url}`

  return (
    <footer className="flex w-full flex-col px-6 text-black 2xl:px-36">
      <div className="flex w-full flex-col items-center justify-between gap-10 py-10 lg:flex-row">
        <Link href="/">
          <Image
            src={logoURL}
            alt={alternativeText}
            width={width}
            height={height}
            className="object-contain"
            priority
          />
        </Link>

        <div className="flex items-center gap-6">
          {socialMedia?.map((social: any) => (
            <Link
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-uno-secondary transition-all duration-300 ease-in-out hover:text-uno-primary lg:hover:-translate-y-1 lg:hover:scale-110"
            >
              {getSocialIcon(social.label)}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex w-full flex-row items-center border-y border-gray-200 py-10 text-sm font-semibold tracking-tight">
        <div className="flex flex-col gap-5">
          <Link
            href={`mailto:${mail}`}
            className="flex w-fit items-center gap-4 transition-colors hover:text-uno-primary"
          >
            <LuMail size={20} strokeWidth={1.5} />
            <span className="leading-none">{mail}</span>
          </Link>

          <Link
            href={`tel:${phone.replace(/\s+/g, '')}`}
            className="flex w-fit items-center gap-4 transition-colors hover:text-uno-primary"
          >
            <LuPhone size={20} strokeWidth={1.5} />
            <span className="leading-none">{phone}</span>
          </Link>

          <article className="flex items-center gap-4">
            <LuMapPin size={20} strokeWidth={1.5} />
            <span className="leading-none">{location}</span>
          </article>
        </div>
      </div>

      <div className="w-full py-10">
        <p className="text-xs font-medium text-gray-500">{copyright}</p>
      </div>
    </footer>
  )
}
