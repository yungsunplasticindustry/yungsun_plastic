import { Play } from 'lucide-react'

export default function VideoSection() {
  return (
    <section className="section-padding bg-zinc-900 text-white">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See Our Machines in Action
          </h2>
          <p className="text-lg text-zinc-300 max-w-2xl mx-auto">
            Watch how our industrial packaging solutions can transform your production line
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video bg-zinc-800 rounded-lg overflow-hidden">
            {/* Placeholder for YouTube iframe - replace with actual video ID */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="bg-yellow-400 text-zinc-900 rounded-full p-6 mb-4 inline-block hover:bg-yellow-500 transition-colors cursor-pointer">
                  <Play className="h-12 w-12" fill="currentColor" />
                </div>
                <p className="text-zinc-400">Video placeholder - Click to play</p>
              </div>
            </div>
            
            {/* Uncomment and add your YouTube video ID */}
            {/* <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=1"
              title="Yungsun Plastic Industry - Company Overview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            /> */}
          </div>
        </div>
      </div>
    </section>
  )
}
