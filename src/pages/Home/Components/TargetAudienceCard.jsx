function TargetAudienceCard(data) {
  return (
    <div className="text-white bg-[#5E93F9] rounded-xl px-4 py-2 h-[16rem] place-self-center border-[3px] border-solid border-[#81AAF9]">
      <h3>{data.data.type}</h3>
      <p>{data.data.description}</p>
    </div>
  );
}

export default TargetAudienceCard;
