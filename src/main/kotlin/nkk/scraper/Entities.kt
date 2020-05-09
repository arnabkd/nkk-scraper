package nkk.scraper


data class Breeder(
  val fylke: Fylke? = null,
  val name: String? = null,
  val kennelName: String? = null,
  val address: String? = null,
  val phone: String? = null,
  val email: String? = null,
  val url: String? = null
)

enum class Fylke(val fullName: String) {
  AGDER("Agder"),
  INNLANDET("Innlandet"),
  MORE_OG_ROMSDAL("Møre og Romsdal"),
  NORDLAND("Nordland"),
  OSLO("Oslo"),
  ROGALAND("Rogaland"),
  TROMS_OG_FINNMARK("Troms og Finmark"),
  TRONDELAG("Trøndelag"),
  VESTFOLD_OG_TELEMARK("Vestfold og Telemark"),
  VESTLAND("Vestland"),
  VIKEN("Viken")
}
