export default function Contact() {
    return (
        <section className="px-4 py-16 text-gray-800 dark:text-white">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">📞 Contact Us</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-10">
                    Have a question or want to get in touch? We’d love to hear from you.
                </p>

                <div className="space-y-6 text-lg">
                    <p>
                        📧 Email:{" "}
                        <a
                            href="mailto:hello@yetinepal.com"
                            className="text-blue-600 dark:text-blue-400 underline"
                        >
                            hello@yetinepal.com
                        </a>
                    </p>

                    <p>📞 Phone: <strong>+977-9700886505</strong></p>

                    <p>📍 Address: <strong>Lamachour-19, Pokhara</strong></p>
                </div>
            </div>
        </section>
    );
}
