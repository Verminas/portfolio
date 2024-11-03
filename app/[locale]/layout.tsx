import localFont from "next/font/local";
import { getTranslations } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "@/app/globals.sass";
import { ThemeProvider } from "@/src/components/ThemeProvider/ThemeProvider";
import { Particle } from "@/src/components/Particle/Particle";

const sans = localFont({
  src: "../fonts/sans/DMSans-VariableFont.ttf",
  variable: "--font-sans",
  weight: "400 500 700",
});
const poppins = localFont({
  src: [
    {
      path: "../fonts/poppins/Poppins-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/poppins/Poppins-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/poppins/Poppins-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/poppins/Poppins-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/poppins/Poppins-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-poppins",
});

export async function generateMetadata(params: Promise<{ locale: string }>) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
    keywords: t("keywords").split(","),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as never)) {
    notFound();
  }

  // Providing all dataLocale to the client
  // side is the easiest way to get started
  const dataLocale = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning >
      <body className={`${poppins.variable} ${sans.variable}`}>
      <Particle/>
      <ThemeProvider attribute="class" defaultTheme="light" >
        <NextIntlClientProvider messages={dataLocale} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </ThemeProvider>
      </body>
    </html>
  );
}



