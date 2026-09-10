import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Marquee } from '@/components/ui/3d-testimonails';

// Energize Fitness Club authentic member experiences
const testimonials = [
  {
    name: 'Amit Kulkarni',
    username: '@amit_k',
    body: 'Best heavy dumbbell collection in Ghatkopar West! AC is powerful even in summers.',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    country: '🇮🇳 Ghatkopar',
  },
  {
    name: 'Sneha Joshi',
    username: '@sneha_j',
    body: 'Lost 8kg in 4 months with coach Priya’s custom Indian nutrition plan.',
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
    country: '🇮🇳 Mumbai',
  },
  {
    name: 'Vikram Patel',
    username: '@vikram_p',
    body: 'The 6:00 AM to 10:30 PM hours make it seamless for my corporate BKC schedule.',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    country: '🇮🇳 Mumbai',
  },
  {
    name: 'Pooja Shah',
    username: '@poojashah',
    body: 'Super hygienic, respectful crowd, and clean private shower facilities.',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    country: '🇮🇳 Ghatkopar',
  },
  {
    name: 'Rahul Mehta',
    username: '@rahul_m',
    body: 'Coaches focus strictly on biomechanics and safe progressive overload.',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    country: '🇮🇳 Mumbai',
  },
  {
    name: 'Ananya Deshmukh',
    username: '@ananya_d',
    body: 'The functional turf zone and battle ropes give the best metabolic burn!',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    country: '🇮🇳 Ghatkopar',
  },
  {
    name: 'Kunal Verma',
    username: '@kunal_v',
    body: 'Olympic deadlift platform with bumper plates is top tier.',
    img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=150&q=80',
    country: '🇮🇳 Mumbai',
  },
  {
    name: 'Rohan Shinde',
    username: '@rohan_s',
    body: 'Hands down the best annual membership value in this area.',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80',
    country: '🇮🇳 Ghatkopar',
  },
];

function TestimonialCard({ img, name, username, body, country }: (typeof testimonials)[number]) {
  return (
    <Card className="w-56 bg-[#14161c] border-white/10 text-white shadow-xl">
      <CardContent className="p-4">
        <div className="flex items-center gap-2.5">
          <Avatar className="size-9 border border-[#d4b07b]/30">
            <AvatarImage src={img} alt={name} />
            <AvatarFallback className="bg-[#1b1e28] text-[#d4b07b] font-bold">{name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <figcaption className="text-sm font-semibold text-white flex items-center gap-1">
              {name} <span className="text-xs text-[#d4b07b]">{country}</span>
            </figcaption>
            <p className="text-xs text-neutral-400">{username}</p>
          </div>
        </div>
        <blockquote className="mt-3 text-xs leading-relaxed text-neutral-300 italic">“{body}”</blockquote>
      </CardContent>
    </Card>
  );
}

export default function Reviews3DMarquee() {
  return (
    <div className="border border-white/10 rounded-xl relative flex h-[460px] w-full max-w-[900px] flex-row items-center justify-center overflow-hidden gap-1.5 [perspective:300px] bg-[#0c0d11]">
      <div
        className="flex flex-row items-center gap-4"
        style={{
          transform:
            'translateX(-60px) translateY(0px) translateZ(-80px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)',
        }}
      >
        {/* Column 1: Vertical Marquee (downwards) */}
        <Marquee vertical pauseOnHover repeat={3} className="[--duration:35s]">
          {testimonials.map((review) => (
            <TestimonialCard key={review.username + '-1'} {...review} />
          ))}
        </Marquee>

        {/* Column 2: Vertical Marquee (upwards) */}
        <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:40s]">
          {testimonials.map((review) => (
            <TestimonialCard key={review.username + '-2'} {...review} />
          ))}
        </Marquee>

        {/* Column 3: Vertical Marquee (downwards) */}
        <Marquee vertical pauseOnHover repeat={3} className="[--duration:38s]">
          {testimonials.map((review) => (
            <TestimonialCard key={review.username + '-3'} {...review} />
          ))}
        </Marquee>

        {/* Column 4: Vertical Marquee (upwards) */}
        <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:42s]">
          {testimonials.map((review) => (
            <TestimonialCard key={review.username + '-4'} {...review} />
          ))}
        </Marquee>
      </div>

      {/* Luxury Vignette Gradient Overlays */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#0c0d11] to-transparent"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#0c0d11] to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#0c0d11] to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#0c0d11] to-transparent"></div>
    </div>
  );
}
