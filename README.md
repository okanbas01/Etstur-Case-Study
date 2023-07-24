
### Etstur-Case-Study

### How to run test cases?
- Firstly You Must Run : `cd cypress` and `npm install`,
- Cypress Feature : `npx cypress open`  or `npx cypress run`
- API Project : `npx cypress open` or `npx cypress run`


### Bug Raporlama

### 1. BUG
**Title :**   Anasayfa Search İnput’unda Text Düzenlenme Yapılamaması

**Environment :**  

- Ortam( Production)
- Tarayıcı(Chrome, Firefox)
- Cihaz(Desktop)

**Steps to Reproduce :**

https://www.etstur.com/ Adresine gidilir.

Search inputuna herhangi bir text yazılır. (Antalya Otel gibi)

Text’de düzeltme yapmak için input içinde herhangi bir noktaya mouse ile tıklanınca input alanındaki text tamamen silinmektedir.

**Actual Result :**

İnput alanı tamamen temizlenerek boş görünmektedir.

**Expected Result :**

İnputta tıklanılan yere imlecin gitmesi lazım ve kullanıcının text üzerinde değişiklik yapmasına imkan verilmeli.

### 2. BUG
**Title :**   Canlı Destek Sayfası Mesai Dışı Saatlerde Yüklenirken Form Sayfası Göstermesi 

**Environment :**  

- Ortam( Production)
- Tarayıcı(Chrome, Firefox)
- Cihaz(Desktop)

**Steps to Reproduce :**

Anasayfa sağ navbar alanında  “Yardım” başlığına tıklanır. 

Açılan dropdown’da “Canlı Destek” seçilir. 

Açılan pop-up önce form şeklinde açılıyor 

Daha sonradan “****Online destek için mesai saatleri dışındayız.”****  yazısının olduğu ekrana geçmektedir.

**Actual Result :**

Canlı Destek sayfası önce form sayfası içeriklerini göstermektedir, ardından “****Online destek için mesai saatleri dışındayız.”****  ekranını göstermektedir.

**Expected Result :**

Canlı Destek sayfası açılır açılmaz “****Online destek için mesai saatleri dışındayız.”****  ekranını göstermelidir.
