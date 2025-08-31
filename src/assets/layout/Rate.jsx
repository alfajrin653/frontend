import { Card, CardContent } from "../../components/ui/card"
import { FaStar } from "react-icons/fa"
import { FaUserCircle } from "react-icons/fa"

const reviews = [
  {
    id: 1,
    name: "Rieska Amelia",
    rating: 5,
    comment: "Ternyata ada tempat cuci sepatu yg ok bgt deket rumah, next pasti balik lagi dan mau coba laundry nya",
    date: "2 hari lalu"
  },
  {
    id: 2,
    name: "Rendy Saptono",
    rating: 5,
    comment: "Smua jenis laudry bisa banget disini..baju..sepatu.karpet dll..harga trjangkau kualitas premium..bintang 5 dahh pelayan ok..smua pakai wangi..bisa antar jemput juga...mantappp",
    date: "1 minggu lalu"
  },
  {
    id: 3,
    name: "Abi Reskiyana",
    rating: 5,
    comment: "Sangat puas dengan pelayanan di sini! Pakaian dicuci bersih, wangi, dan rapi. Staff juga ramah dan prosesnya cepat. Pasti akan langganan terus!!!!",
    date: "3 minggu lalu"
  },
]

export default function Rate() {
  return (
   <div id="rate" className="max-w-6xl mx-auto p-4 space-y-4">
  <h2 className="text-2xl font-bold">Ulasan Pelanggan</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
    {reviews.map((review) => (
      <Card
        key={review.id}
        className="shadow-md w-full h-[220px] flex flex-col"
      >
        <CardContent className="flex gap-4 p-4 h-full">
          <FaUserCircle size={40} className="text-gray-500 shrink-0" />

          <div className="flex flex-col justify-between flex-1">
            <div>
              <h3 className="font-semibold">{review.name}</h3>

              {/* Rating Stars */}
              <div className="flex items-center my-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i < review.rating ? "text-yellow-500" : "text-gray-300"
                    }
                  />
                ))}
              </div>

              <p className="text-gray-700 text-sm line-clamp-3">
                {review.comment}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
</div>
  )
}