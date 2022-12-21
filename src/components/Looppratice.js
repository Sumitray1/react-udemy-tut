import Applyingcompleteloop from "./Applyingcompleteloop";
import MainBox from "./MainBox";
function Looppratice() {
  const DUMMY_DATA = [
    {
      id: "m1",
      title: "This is a first meetup",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
      address: "Meetupstreet 5, 12345 Meetup City",
      description:
        "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
    },
    {
      id: "m2",
      title: "This is a second meetup",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
      address: "Meetupstreet 5, 12345 Meetup City",
      description:
        "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
    },
  ];
  return (
    <div className="Main">
      <h1>Looping over object in react</h1>;
      {DUMMY_DATA.map((dumData) => {
        return (
          <>
            <MainBox>
              <Applyingcompleteloop
                id={dumData.id}
                title={dumData.title}
                image={dumData.image}
                address={dumData.address}
                description={dumData.description}
                key={dumData.id}
              />
            </MainBox>
          </>
        );
      })}
    </div>
  );
}
export default Looppratice;
