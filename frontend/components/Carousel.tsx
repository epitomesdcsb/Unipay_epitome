import Carousel from './ui/carousel';

export default function CarouselDemo() {
  return (
    <main className="w-full">
      <Carousel 
        slides={[
          { id: 1, src: 'https://unipay7781.s3.us-east-1.amazonaws.com/epitome25.webp', alt: 'Description 1' },
          { id: 2, src: 'https://unipay7781.s3.us-east-1.amazonaws.com/codenovate2.png', alt: 'Description 2' },
          { id: 3, src: 'https://plus.unsplash.com/premium_photo-1681422570054-9ae5b8b03e46?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5zcGxhc2glMjBhcHB8ZW58MHx8MHx8fDA%3D', alt: 'Description 3' },
        ]}
      />
    </main>
  );
}