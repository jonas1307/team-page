export default function handler(req, res) {
  var team = [
    { id: 1, name: 'Bill Mahoney', role: 'Product Owner', picture: `${process.env.BASE_URL}/img/photo1.png` },
    { id: 2, name: 'Saba Cabrera', role: 'Art Director', picture: `${process.env.BASE_URL}/img/photo2.png` },
    { id: 3, name: 'Shae Le', role: 'Tech Lead', picture: `${process.env.BASE_URL}/img/photo3.png` },
    { id: 4, name: 'Skylah Lu', role: 'UX Designer', picture: `${process.env.BASE_URL}/img/photo4.png` },
    { id: 5, name: 'Griff Richards', role: 'Developer', picture: `${process.env.BASE_URL}/img/photo5.png` },
    { id: 6, name: 'Stan John', role: 'Developer', picture: `${process.env.BASE_URL}/img/photo6.png` }
  ];
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(team));
}
