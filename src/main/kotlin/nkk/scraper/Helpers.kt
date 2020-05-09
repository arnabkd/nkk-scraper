package nkk.scraper

import java.io.File

typealias BreederFields = List<Pair<String, String>>

fun BreederFields.toBreeder(fylke: Fylke) =
  Breeder(
    fylke = fylke,
    name = first { it.first == "Navn" }.second,
    kennelName = first { it.first == "Kennelnavn" }.second,
    address = first { it.first == "Adresse" }.second,
    phone = first { it.first == "Telefon" }.second,
    email = first { it.first == "Epost" }.second,
    url = first { it.first == "Hjemmeside" }.second
  )

private const val CSV_HEADER = "Fylke;Kennel navn;Navn;Adresse;Telefon;E-post;Hjemmeside"
private fun Breeder.toCSVRow() = "${fylke?.fullName}; $kennelName; $name; $address; $phone; $email; $url"
fun List<Breeder>.writeToCSV(fileName: String) =
  (listOf(CSV_HEADER) + map { it.toCSVRow() })
    .joinToString("\n")
    .run {
      File(fileName).writeText(this)
    }

