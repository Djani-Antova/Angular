import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
   products = [
    {
      id: 1,
      name: "Eau Fraîche",
      author: "Alexandre Dubois",
      longevity: 10,
      type: "Masculine",
      price: 76.50,
      ratings: 4.5,
      image: "../../assets/image1.jpg",
      description: "This perfume captivates with its alluring blend of floral and woody notes. A delicate harmony that lingers, leaving a trail of elegance and charm."
    },
    {
      id: 2,
      name: "Belle Femme",
      author: "Élodie Martin",
      longevity: 8,
      type: "Feminine",
      price: 68.75,
      ratings: 4.0,
      image: "../../assets/image2.jpg",
      description: "Infused with exotic spices and rare blossoms, this fragrance evokes a sense of mystique and adventure. A symphony of scents that unveils an unforgettable journey of the senses."
    },
    {
      id: 3,
      name: "Élégance",
      author: "François Dupont",
      longevity: 12,
      type: "Feminine",
      price: 67.25,
      ratings: 4.2,
      image: "../../assets/image3.jpg",
      description: "Captivating and luxurious, this perfume embodies elegance and allure. With notes of blooming florals and rich woods, it's a scent that exudes confidence and charm, leaving an indelible mark wherever you go."
    },
    {
      id: 4,
      name: "Chérie",
      author: "Sophie Lacroix",
      longevity: 6,
      type: "Feminine",
      price: 85.90,
      ratings: 3.8,
      image: "../../assets/image4.jpg",
      description: "Introducing a captivating essence that unveils the allure of blooming florals. This perfume captures the essence of a romantic garden, with notes of delicate roses and enchanting jasmine. Its evocative bouquet evokes feelings of love and passion, making it a perfect choice for those special moments."
    },
    {
      id: 5,
      name: "Le Parfum",
      author: "Jean-Pierre Rousseau",
      longevity: 14,
      type: "Masculine",
      price: 78.50,
      ratings: 4.8,
      image: "../../assets/image5.jpg",
      description: "Experience a journey to the exotic with this mesmerizing perfume. Envelop yourself in the mystique of distant lands, where rare spices and precious woods intermingle. This fragrance takes you on an olfactory adventure, evoking memories of vibrant bazaars and hidden treasures. Embrace the allure of the unknown with every intoxicating note."
    },
    {
      id: 6,
      name: "Fleur de Printemps",
      author: "Camille Dubois",
      longevity: 9,
      type: "Feminine",
      price: 87.20,
      ratings: 4.3,
      image: "../../assets/image6.jpg",
      description: "Indulge in the essence of elegance with this refined perfume. A symphony of floral and citrus notes dances delicately on your skin, creating an aura of sophistication. Let the fragrance unfold its layers, revealing a harmonious blend that embodies grace and charm. Wear this scent to exude timeless beauty and capture attention wherever you go."
    },
    {
      id: 7,
      name: "L'Essence",
      author: "Pierre Moreau",
      longevity: 11,
      type: "Feminine",
      price: 49.95,
      ratings: 4.1,
      image: "../../assets/image7.jpg",
      description: "Experience the allure of mystique with this captivating perfume. Envelop yourself in a veil of enigmatic scents that evoke the essence of intrigue. The interplay of warm and woody notes entices the senses, leaving a trail of fascination in your wake. This fragrance is an invitation to embrace the unknown and unleash your inner magnetism."
    },
    {
      id: 8,
      name: "La Perle",
      author: "Isabelle Laurent",
      longevity: 7,
      type: "Masculine",
      price: 76.80,
      ratings: 3.7,
      image: "../../assets/image8.jpg",
      description: "Unleash your inner elegance with this sophisticated perfume. The delicate blend of floral and citrus notes creates a timeless fragrance that exudes charm and grace. With every spritz, you'll feel a sense of refinement that complements your unique style."
    },
    {
      id: 9,
      name: "Oud Mystique",
      author: "Ahmed Malik",
      longevity: 16,
      type: "Masculine",
      price: 81.00,
      ratings: 4.9,
      image: "../../assets/image9.jpg",
      description: "Unleash your inner adventurer with this invigorating perfume. Bursting with vibrant citrus notes and hints of exotic spices, it's a fragrance that embodies the spirit of exploration. As you wear it, you'll feel a rush of energy and a sense of freedom."
    },
    {
      id: 10,
      name: "Rêve de Femme",
      author: "Juliette Martin",
      longevity: 10,
      type: "Feminine",
      price: 79.50,
      ratings: 4.4,
      image: "../../assets/image10.jpg",
      description: "Embark on a sensory journey with this enchanting perfume. The captivating fusion of exotic spices and rich woods transports you to far-off lands, igniting your wanderlust and imagination. With just a hint of sweetness, this fragrance lingers on your skin like a treasured memory. "
    },
    {
      id: 11,
      name: "L'Homme",
      author: "Louis Chevalier",
      longevity: 13,
      type: "Masculine",
      price: 84.50,
      ratings: 4.7,
      image: "../../assets/image11.jpg",
      description: "Indulge in luxury with this opulent perfume. A symphony of delicate florals and velvety musk creates a harmonious composition that's both timeless and modern. With each spritz, you're enveloped in an aura of elegance and sophistication. The fragrance dances on your skin, leaving an unforgettable trail that captivates everyone in its wake."
    },
    {
      id: 12,
      name: "Amour",
      author: "Aurélie Dupont",
      longevity: 14,
      type: "Feminine",
      price: 96.50,
      ratings: 4.7,
      image: "../../assets/image12.jpg",
      description: "The scent evolves on your skin, revealing layers of intrigue and mystery. Whether you're exploring a bustling city or embarking on a wild journey, this perfume will be your faithful companion, inspiring you to seize every moment and create unforgettable memories."
    }
  ]; 

  getTotalProducts() {
    return this.products.length
  }

  getTotalFeminineProducts() {
    return this.products.filter(product => product.type === 'Feminine').length
  }
  
  getTotalMasculineProducts() {
    return this.products.filter(product => product.type === 'Masculine').length
  }
  

}
