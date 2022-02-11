import { BaseModal } from './BaseModal'
import setUsed from './../../App'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  if (isOpen) {
    setUsed();
    console.log("coom");
  }
  return (
    <BaseModal title="Docentenlijst" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        <br/>
        AARM  M. Aarnoutse <br/><br/>
        AAZZ	Z. Aazamy <br/><br/>
        ADEL	L. van den Adel <br/><br/>
        ADEM	M. van den Adel <br/><br/>
        ADRN	N. Adriaans <br/><br/>
        AKKA	S.A.T.B. van den Akker <br/><br/>
        AKSF	U. Aksu <br/><br/>
        ALIA	A.Alizadeh <br/><br/>
        BAHN	N. el Bahraoui <br/><br/>
        BAKS	S. Baks <br/><br/>
        BAKW	W.P. Baktawar <br/><br/>
        BENS	S.W. Bendeler <br/><br/>
        BERA	N. van den Berg <br/><br/>
        BESA	A. Besseling-de Graaf <br/><br/>
        BEZZ	Z. Bezemer <br/><br/>
        BLAC	C. Blaauw <br/><br/>
        BLER	Q. Bleijs <br/><br/>
        BLOI	W.H. Bloem <br/><br/>
        BOOG	J. van den Boogaart <br/><br/>
        BOOK	K. Boone <br/><br/>
        BORJ	J.E. Borsboom <br/><br/>
        BOTE	E. Both <br/><br/>
        BOTI	I. Both <br/><br/>
        BOUI	S. Bounou <br/><br/>
        BOUC	C. Bouwmeester <br/><br/>
        BROL	L. Broere <br/><br/>
        BUSL	L. Busink <br/><br/>
        BUUE	E.  P.J. van Buuren <br/><br/>
        BYVJ	J.F.M. Bijvoet <br/><br/>
        CABF	F. Cabanelas-Serna de Grauw <br/><br/>
        CORB	R. Cordemans <br/><br/>
        CRUP	P. Crucq-Kooij <br/><br/>
        DEEC	C. Deen <br/><br/>
        DIEI	R.J. Diehle <br/><br/>
        DOEA	M. Doekes <br/><br/>
        DUID	D.C.W. van Duin <br/><br/>
        ENDA	A.P. van den Ende  <br/><br/>
        ENDC	C.H.  van den Ende <br/><br/>
        EUSE	E. Euser <br/><br/>
        FAAM	M.M.C. Faassen <br/><br/>
        FABG	G.E. Faber <br/><br/>
        FARF	F. Farah <br/><br/>
        FENW	W.N. Fens <br/><br/>
        FONM	M. Fonkert <br/><br/>
        FUKG	G. Fukkink <br/><br/>
        GEEB	B.J. Geefshuijsen <br/><br/>
        GENE	E.A.P.  van Genderen <br/><br/>
        GERM	M.R. van Gerven <br/><br/>
        GIEL	L. de Gier <br/><br/>
        GOMJ	J.Y. Gomersbach <br/><br/>
        GOUL	L. Gouw <br/><br/>
        GRIS	S.J.  Griep <br/><br/>
        GROA	H.M.J. Grobbe <br/><br/>
        GROF	A. Groot <br/><br/>
        GROJ	J. Groeneveld - Plomp <br/><br/>
        GROI	M.J.A. Groothoff <br/><br/>
        HAAF	F.M. den Haan <br/><br/>
        HAEM	M. Haerkens <br/><br/>
        HAGO	O. Hagen <br/><br/>
        HAMA	A. Hamdi <br/><br/>
        HARC	C.M.  Hartog <br/><br/>
        HATP	P.E. Hatuina-van Vugt <br/><br/>
        HAZJ	J. Hazelaar <br/><br/>
        HEEG	G.E.A.M. Heerkens <br/><br/>
        HEYC	C. Heijboer <br/><br/>
        HERE	F. E. Hersbach <br/><br/>
        HERJ	J.R.  Hersbach <br/><br/>
        HETD	D. van Heteren <br/><br/>
        HOBD	D. Hobers <br/><br/>
        HORS	F. van der Horst <br/><br/>
        HOUH	H. Houda <br/><br/>
        HOUK	K.A.N. Houwaart <br/><br/>
        JANN	N.L.T. Jansen <br/><br/>
        JONO	J. Jongsma <br/><br/>
        JUCC	C.J.T.M. Juch-Renard <br/><br/>
        JUDK	K.E.P. Judels <br/><br/>
        JURA	C.M.G.A. . Jurgens <br/><br/>
        KAIT	T.J. Kaiser <br/><br/>
        KAMT	T.M. van Kampen <br/><br/>
        KIKM	M. Kik-van der Linden <br/><br/>
        KIRJ	J. Kiros <br/><br/>
        KLOL	L. Klok <br/><br/>
        KLON	R. van der Klooster <br/><br/>
        KLOM	M. Klootwijk <br/><br/>
        KOCR	R. Koch <br/><br/>
        KOEP	P.F.  Koedam <br/><br/>
        KOLJ	J. van der Kolk <br/><br/>
        KOOA	M.A.P. van Kooten <br/><br/>
        KRAP	P.W. Kranenburg <br/><br/>
        KROR	R. Kroon <br/><br/>
        KWAM	M. Kwantes <br/><br/>
        LANJ	J.G. Lansink <br/><br/>
        LINO	J. van der Linden <br/><br/>
        LOBS	S. Lobbezoo <br/><br/>
        MARL	L. Martins-Martens <br/><br/>
        MEIA	M.D. Meijer <br/><br/>
        MELC	C.L. Melles <br/><br/>
        MERR	R. van de Merwe <br/><br/>
        MINR	R.B.C. Mine <br/><br/>
        MURC	C.M.A.  Muris <br/><br/>
        NEEE	E.J. Neeskens <br/><br/>
        NIEH	T.N. Niehe <br/><br/>
        NIEE	E. van Niel <br/><br/>
        NIEP	P.R. Nienkemper <br/><br/>
        NOOC	C. Van Noort <br/><br/>
        NUGK	C. Nugteren <br/><br/>
        NUSI	I. Nüssgens <br/><br/>
        OESL	L. Oeseburg-Wijtsma <br/><br/>
        OOSM	M.P.L. Oosterwijk <br/><br/>
        OPSS	S.J.A.  Opschoor <br/><br/>
        ORUB	B. Oruc <br/><br/>
        OUWM	M.A.  Ouwerkerk <br/><br/>
        OUWR	R. Ouwens <br/><br/>
        OVET	J.C.C. van Overveld <br/><br/>
        OZEU	Ü. Ozer <br/><br/>
        PAIH	H.M. le Pair <br/><br/>
        PEPR	R.W,  van Peppen  <br/><br/>
        PLAJ	J.C. van der Plaat <br/><br/>
        PORA	A. Pors <br/><br/>
        RIJA	A.M. van Rijckevorsel <br/><br/>
        RIJM	M. van Rijnberk <br/><br/>
        ROMN	N. Romeijn-Geveke <br/><br/>
        ROOD	D. de Roon <br/><br/>
        ROOM	M. de Roon-Mens <br/><br/>
        RUIM	M. de Ruiter <br/><br/>
        SCHS	S. Schaap <br/><br/>
        SCHC	J.H. van Schanke <br/><br/>
        SCHB	R. Scheerman <br/><br/>
        SCHJ	J.G.M. Schermer <br/><br/>
        SCIP	W.P. Schipper <br/><br/>
        SCHY	C.C.  Schouten <br/><br/>
        SCHZ	F.C.W. Schrauwen <br/><br/>
        SCHD	D. Schreurs <br/><br/>
        SCPI	P. Schuitema <br/><br/>
        SIEL	E.H.C. Siemons <br/><br/>
        SLIJ	J. Slikboer <br/><br/>
        SMIM	M. Smit <br/><br/>
        SMUI	I.E. Smulders <br/><br/>
        SODW	W.S. Sodikromo <br/><br/>
        SOER	S.R. Soekroella <br/><br/>
        STEA	A.P. Stehouwer <br/><br/>
        STEM	M. Steijn <br/><br/>
        STIH	H. Stigter <br/><br/>
        STIB	B. Stinis <br/><br/>
        STOE	R. Stolk <br/><br/>
        STRE	E.J.M. Struijk-Pfaff <br/><br/>
        THAW	W. Thape-van Eersel <br/><br/>
        TOLR	I. van Tol <br/><br/>
        TOLJ	J. Tol <br/><br/>
        TOON	N.M.N. van Toorn <br/><br/>
        TORP	P.J. van Toren <br/><br/>
        TWIA	A. Twigt <br/><br/>
        VELI	 B. Velazquez Moreno-v.d. Steen <br/><br/>
        VEEF	F. van Veen <br/><br/>
        VENN	N.R.  Vendrik <br/><br/>
        VENM	M.P. Venturini <br/><br/>
        VRHF	M. Verhoef <br/><br/>
        VERH	F. Verhoek <br/><br/>
        VERE	E. Vermeij <br/><br/>
        VERA	J. Verschoor <br/><br/>
        VERJ	B. Verwilligen <br/><br/>
        VINM	M. de Vink <br/><br/>
        VISN	M. Visser <br/><br/>
        VISM	M. de Visser <br/><br/>
        VOOJ	J. Voorwinden <br/><br/>
        VORS	J.J. Vorsteveld <br/><br/>
        VOSM	M. Vosselman <br/><br/>
        VOUD	D. Voulon <br/><br/>
        VRIM	M. de Vries <br/><br/>
        VRIV	V. de Vries <br/><br/>
        VROH	H.M. Vroemen <br/><br/>
        WAAL	G. van der Waal <br/><br/>
        WALR	R.W. Wallenborn <br/><br/>
        WANM	M.G. Wansink <br/><br/>
        WEYS	S.J.H. Weij <br/><br/>
        WERE	E. de Wert <br/><br/>
        WINO	E.R. de Winter <br/><br/>
        WOUE	E. Wouter <br/><br/>
        YARA	A. Yaroshenya <br/><br/>
        YILD	D. Yilderim <br/><br/>
        ZARA	A. Zarhoni <br/><br/>
        ZIJL	M. Zijlmans <br/><br/>
        ZWAR	R. Zwartbol
      </p>
    </BaseModal>
  )
}
