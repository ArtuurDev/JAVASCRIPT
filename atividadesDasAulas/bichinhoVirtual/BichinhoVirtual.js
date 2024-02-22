class BichinhoVirtual{
    constructor(nome) {
        this.nome = nome
        this.energia = 100
        this.brincar = false
        this.dormir = false

    }

    get obterNome() {
        return this.nome
    }

    get obterEnergia() {
        return this.energia
    }

    get obterBrincar() {
        if (this.brincar === false) {
        return `${this.nome} nao está brincando`
    } else{
        return `${this.nome} esta brincando`}
    }

    get verDormir(){
        if (this.energia === 0) {
            this.dormir === true
            return `O bichinho está dormindo`
        } else{
            return `o bixinho está acordado`
        }
        
        
    }   
    setAcordarBixin() {
        if (this.dormir === true) {
            this.dormir = false
            this.energia = 100
            return `o bixinho acordou`
        } else{
            return `o bixinho ja está acordado`
        }
    }

    // function
    setBrincar(){
        this.brincar = true
        this.energia -= 50
        this.dormir = true
        return `${this.nome} está brincando`
        
    }

    
    get verEnergia() {
        return this.energia
   }
}


let tom = new BichinhoVirtual('talking tom')


console.log(tom.obterBrincar)

console.log(tom.verDormir)
console.log(tom.verEnergia)

console.log(tom.setBrincar())
console.log(tom.setBrincar())
console.log(tom.verDormir)

console.log(tom.setAcordarBixin())
console.log(tom.verEnergia)