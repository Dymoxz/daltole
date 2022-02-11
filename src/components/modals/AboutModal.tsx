import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Docentenlijst" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        M. Aarnoutse Docent Frans
        <br />
        <br />
        Z. Aazamy Docent wiskunde
        <br />
        <br />
        M. van den Adel Stagiaire wiskunde
        <br />
        <br />
        N. Adriaans Docent Engels
        <br />
        <br />
        S.A.T.B. van den Akker Docent Nederlands
        <br />
        <br />
        U. Aksu Docent Engels
        <br />
        <br />
        A.Alizadeh Toezichthouder buiten
        <br />
        <br />
        N. el Bahraoui Jeugdverpleegkundige <br />
        <br />
        W.P. Baktawar Stagiair biologie
        <br />
        <br />
        S.W. Bendeler Docent Nederlands Gedeeld mentoraat BHA1L
        <br />
        <br />
        N. van den Berg Docent O&O
        <br />
        <br />
        A. Besseling-de Graaf Directeur Te bereiken via
        <br />
        <br />
        Z. Bezemer Docent Engels
        <br />
        <br />
        C. Blaauw Stagiaire Engels
        <br />
        <br />
        Q. Bleijs Docent geschiedenis
        <br />
        <br />
        W.H. Bloem Stagiaire scheikunde
        <br />
        <br />
        J. van den Boogaart Docent Lichamelijke opvoeding
        <br />
        <br />
        K. Boone Teamleider H-team 2 (havo 4 en 5)
        <br />
        <br />
        J.E. Borsboom Docent natuurkunde
        <br />
        <br />
        E. Both Docent lichamelijke opvoeding
        <br />
        <br />
        I. Both Docent lichamelijke opvoeding
        <br />
        <br />
        S. Bounou Docent Frans
        <br />
        <br />
        C. Bouwmeester Stagiaire Engels
        <br />
        <br />
        L. Broere Docent aardrijkskunde
        <br />
        <br />
        L. Busink Jeugdverpleegkundige
        <br />
        <br />
        E. P.J. van Buuren Docent Nederlands
        <br />
        <br />
        J.F.M. Bijvoet Docent biologie en TNW
        <br />
        <br />
        F. Cabanelas-Serna de Grauw Toezichthouder/kantinemedewerker
        <br />
        <br />
        R. Cordemans Stagiair geschiedenis
        <br />
        <br />
        P. Crucq-Kooij Docent lichamelijke opvoeding
        <br />
        <br />
        C. Deen Docent Nederlands
        <br />
        <br />
        R.J. Diehle Docent Duits
        <br />
        <br />
        M. Doekes Docent Grieks, Latijn en KCV
        <br />
        <br />
        D.C.W. van Duin Docent Nederlands
        <br />
        <br />
        A.P. van den Ende Docent Geschiedenis
        <br />
        <br />
        C.H. van den Ende Dyslexiecoach
        <br />
        <br />
        E. Euser Stagiaire aardrijkskunde
        <br />
        <br />
        M.M.C. Faassen Docent tekenen, CKV
        <br />
        <br />
        G.E. Faber Docent geschiedenis
        <br />
        <br />
        F. Farah Docent aardrijkskunde
        <br />
        <br />
        W.N. Fens Systeembeheerder
        <br />
        <br />
        M. Fonkert Receptionist/Telefonist
        <br />
        <br />
        G. Fukkink Vrijwilliger kantine
        <br />
        <br />
        B.J. Geefshuijsen Docent geschiedenis
        <br />
        <br />
        E.A.P. van Genderen Toezichthouder
        <br />
        <br />
        M.R. van Gerven Docent geschiedenis
        <br />
        <br />
        L. de Gier Docent economie
        <br />
        <br />
        J.Y. Gomersbach Docent natuurkunde
        <br />
        <br />
        L. Gouw Toezichthouder/telefonist
        <br />
        <br />
        S.J. Griep Secretaresse directeur
        <br />
        <br />
        H.M.J. Grobbe Docent Tekenen
        <br />
        <br />
        A. Groot Docent Nederlands
        <br />
        <br />
        J. Groeneveld - Plomp Docent maatschappijleer
        <br />
        <br />
        M.J.A. Groothoff Docent wiskunde en O&O
        <br />
        <br />
        F.M. den Haan Docent Grieks, Latijn en KCV <br />
        <br />
        V. de Haan Docent wiskunde en rekenvaardigheid
        <br />
        <br />
        M. Haerkens Teamassistent H-team 2 (havo 3, 4 en 5)
        <br />
        <br />
        O. Hagen Docent wiskunde
        <br />
        <br />
        A. Hamdi Docent wiskunde
        <br />
        <br />
        C.M. Hartog Vrijwilliger klein onderhoud
        <br />
        <br />
        P.E. Hatuina-van Vugt Teamassistent M-team <br />
        <br />
        J. Hazelaar Docent Frans
        <br />
        <br />
        G.E.A.M. Heerkens Docent Nederlands
        <br />
        <br />
        C. Heijboer Docent lichamelijke opvoeding
        <br />
        <br />
        F. E. Hersbach Technisch onderwijsassistent
        <br />
        <br />
        J.R. Hersbach Technisch onderwijsassistent
        <br />
        <br />
        D. van Heteren Docent Engels
        <br />
        <br />
        D. Hobers Docent Engels
        <br />
        <br />
        F. van der Horst Stagiair geschiedenis
        <br />
        <br />
        H. Houda Docent wiskunde
        <br />
        <br />
        K.A.N. Houwaart Docent Frans
        <br />
        <br />
        N.L.T. Jansen Docent biologie en Technasium
        <br />
        <br />
        J. Jongsma Docent scheikunde
        <br />
        <br />
        C.J.T.M. Juch-Renard Docent biologie
        <br />
        <br />
        K.E.P. Judels Docent CKV en tekenen
        <br />
        <br />
        C.M.G.A. . Jurgens Docent Scheikunde en O&O
        <br />
        <br />
        T.J. Kaiser Docent aardrijkskunde en internationalisering
        <br />
        <br />
        T.M. van Kampen Docent wiskunde
        <br />
        <br />
        M. Kik-van der Linden Teamassistent M-team
        <br />
        <br />
        J. Kiros Docent wiskunde
        <br />
        <br />
        L. Klok Teamleider V-team 1 (vwo 2 en 3)
        <br />
        <br />
        R. van der Klooster Docent dans en drama
        <br />
        <br />
        M. Klootwijk Administratief medewerkster leerlingenadministratie
        <br />
        <br />
        R. Koch Docent biologie
        <br />
        <br />
        P.F. Koedam Docent Engels
        <br />
        <br />
        J. van der Kolk Docent aardrijkskunde <br />
        <br />
        M.A.P. van Kooten Docent lichamelijke opvoeding
        <br />
        <br />
        P.W. Kranenburg Docent lichamelijke opvoeding
        <br />
        <br />
        R. Kroon Docent Engels
        <br />
        <br />
        M. Kwantes Docent Duits
        <br />
        <br />
        J.G. Lansink Technisch medewerker facilitaire dienst
        <br />
        <br />
        J. van der Linden Docent natuurkunde
        <br />
        <br />
        S. Lobbezoo Docent biologie en O&O
        <br />
        <br />
        L. Martins-Martens Medewerker administratie en secretariaat
        <br />
        <br />
        M.D. Meijer Docent scheikunde <br />
        <br />
        C.L. Melles Docent informatica
        <br />
        <br />
        R. van de Merwe Kantinemedewerkster
        <br />
        <br />
        R.B.C. Mine Docent Tekenen,handvaardigheid en CKV
        <br />
        <br />
        C.M.A. Muris Roostermaker
        <br />
        <br />
        E.J. Neeskens Conciërge gebouw A<br />
        <br />
        T.N. Niehe Docent economie
        <br />
        <br />
        E. van Niel Docent Frans
        <br />
        <br />
        P.R. Nienkemper Teamleider V-team 2 (vwo 4, 5 en 6)
        <br />
        <br />
        C. Van Noort Docent wiskunde en rekenvaardigheid
        <br />
        <br />
        C. Nugteren Docent wiskunde
        <br />
        <br />
        I. Nüssgens Docent Duits
        <br />
        <br />
        L. Oeseburg-Wijtsma Docent biologie
        <br />
        <br />
        M.P.L. Oosterwijk Docent aardrijkskunde
        <br />
        <br />
        S.J.A. Opschoor Docent economie <br />
        <br />
        B. Oruc Docent muziek <br />
        <br />
        B. Oruc Docent Duits
        <br />
        <br />
        M.A. Ouwerkerk Teamleider B-team (brugklas havo / atheneum, atheneum,
        gymnasium en Technasium)
        <br />
        <br />
        R. Ouwens Docent Nederlands
        <br />
        <br />
        J.C.C. van Overveld Docent Lichamelijke opvoeding <br />
        <br />
        Ü. Ozer Docent aardrijkskunde
        <br />
        <br />
        H.M. le Pair Docent CKV, tekenen, kunstgeschiedenis en kunstklas
        <br />
        <br />
        R.W, van Peppen Conciërge gebouw A<br />
        <br />
        J.C. van der Plaat BHV’-er
        <br />
        <br />
        A. Pors Docent aardrijkskunde
        <br />
        <br />
        A.M. van Rijckevorsel Docent biologie
        <br />
        <br />
        M. van Rijnberk Docent Engels
        <br />
        <br />
        N. Romeijn-Geveke Teamassistent B-team (brugklas 1A t/m 1H +1K:
        havo/atheneum, atheneum, gymnasium en Technasium)
        <br />
        <br />
        D. de Roon Docent wiskunde
        <br />
        <br />
        M. de Roon-Mens Teamassistent V-2team
        <br />
        <br />
        M. de Ruiter Teamleider M-team (brugklas mavo/havo1 & mavo 2, 3 en 4)
        <br />
        <br />
        M.M. de Ruiter Docent Nederlands Mentor BH5B
        <br />
        <br />
        S. Schaap Docent lichamelijke opvoeding <br />
        <br />
        J.H. van Schanke Toezichthouder gebouw B<br />
        <br />
        R. Scheerman Docent natuurkunde
        <br />
        <br />
        J.G.M. Schermer Docent O&O
        <br />
        <br />
        W.P. Schipper Docent wiskunde en rekenvaardigheid
        <br />
        <br />
        C.C. Schouten Toezichthouder MFA en gebouw A<br />
        <br />
        F.C.W. Schrauwen Decaan studie- en leerlingenbegeleiding <br />
        <br />
        D. Schreurs Docent biologie
        <br />
        <br />
        P. Schuitema Docent Frans
        <br />
        <br />
        E.H.C. Siemons Docent Nederlands
        <br />
        <br />
        J. Slikboer Administratief medewerkster leerlingenadministratie
        <br />
        <br />
        M. Smit Docent aardrijkskunde
        <br />
        <br />
        I.E. Smulders Decaan studie- en leerlingenbegeleiding
        <br />
        <br />
        W.S. Sodikromo Docent natuurkunde
        <br />
        <br />
        S.R. Soekroella Docent Nederlands
        <br />
        <br />
        A.P. Stehouwer Adjunct-directeur <br />
        <br />
        M. Steijn Docent biologie
        <br />
        <br />
        H. Stigter Docent Duits
        <br />
        <br />
        B. Stinis Docent tekenen
        <br />
        <br />
        R. Stolk Docent wiskunde
        <br />
        <br />
        E.J.M. Struijk-Pfaff Teamassistent V-team 1 (vwo 2 & 3)
        <br />
        <br />
        W. Thape-van Eersel Docent wiskunde
        <br />
        <br />
        I. van Tol Docent economie
        <br />
        <br />
        J. Tol Docent geschiedenis
        <br />
        <br />
        N.M.N. van Toorn Docent dans & drama en kunstklas dans
        <br />
        <br />
        P.J. van Toren Conciërge <br />
        <br />
        A. Twigt Docent Frans
        <br />
        <br /> B. Velazquez Moreno-v.d. Steen Technisch onderwijsassistent
        <br />
        <br />
        F. van Veen Docent scheikunde
        <br />
        <br />
        N.R. Vendrik Docent Duits
        <br />
        <br />
        M.P. Venturini Technisch onderwijsassistent
        <br />
        <br />
        M. Verhoef Docent Engels
        <br />
        <br />
        F. Verhoek Toezichthouder
        <br />
        <br />
        E. Vermeij Docent Nederlands
        <br />
        <br />
        J. Verschoor Teamassistent H1-team <br />
        <br />
        B. Verwilligen Docent Engels <br />
        <br />
        M. de Vink Docent Aardrijkskunde
        <br />
        <br />
        M. Visser Docent bedrijfseconomie
        <br />
        <br />
        M. de Visser Teamleider H-team 3 (havo 2 en 3)
        <br />
        <br />
        J. Voorwinden Stagiair maatschappijleer
        <br />
        <br />
        J.J. Vorsteveld Docent geschiedenis
        <br />
        <br />
        M. Vosselman Docent Engels
        <br />
        <br />
        D. Voulon Zorgcoördinator / counselor
        <br />
        <br />
        M. de Vries Docent Wiskunde
        <br />
        <br />
        V. de Vries Docent O&O
        <br />
        <br />
        H.M. Vroemen Docent muziek
        <br />
        <br />
        G. van der Waal Medewerkster organisatiebureau
        <br />
        <br />
        R.W. Wallenborn Docent Duits en filosofie
        <br />
        <br />
        M.G. Wansink Docent economie en M&O
        <br />
        <br />
        S.J.H. Weij Docent natuurkunde
        <br />
        <br />
        E. de Wert Stagiaire natuurkunde
        <br />
        <br />
        E.R. de Winter Docent tekenen en handvaardigheid
        <br />
        <br />
        E. Wouter Stagiair economie <br />
        <br />
        A. Yaroshenya Docent Engels
        <br />
        <br />
        D. Yilderim Docent economie
        <br />
        <br />
        A. Zarhoni Docent Frans
        <br />
        <br />
        M. Zijlmans Docent Geschiedenis
        <br />
        <br />
        R. Zwartbol Technisch onderwijsassistent
      </p>
    </BaseModal>
  )
}
