function check() {
    if (confirm("Souhaitez-vous confirmer lenvoi?")) {
        alert("Validé");
        return true;
    } else {
        alert("Annulé");
        return false;
    }
}
