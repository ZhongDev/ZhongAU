export const metadata = {
    title: 'Contact Me - Jason Zhong',
    description: 'How to get it touch with Jason Zhong',
};


export default function Contact() {
    return (
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Contact Me</h1>
        <p className="mt-2">
          You can reach me at{' '}
          <a href="mailto:jason@zhong.au" className="text-blue-500">
            jason@zhong.au
          </a>
          .
        </p>
      </main>
    );
  }
  