import Link from "next/link"

export default function Hiring() {
    return (
        <section className="flex items-center justify-center px-4 mt-12">
            <div className="max-w-xl border border-gray-700 p-8 rounded-xl shadow-md text-center">
                <p className="mb-4">
                    Thank you for your interest in joining <strong>Yeti Nepal</strong>! 🙏
                </p>

                <p className="mb-4">
                    We're not hiring right now, but we’re always open to hearing from passionate learners and developers.
                </p>

                <p className="mb-6">
                    Feel free to send your CV and we’ll contact you when opportunities arise.
                </p>

                <Link href="mailto:hello@yetinepal.com" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition">
                    📧 Send CV to hello@yetinepal.com
                </Link>
            </div>
        </section>
    )
}