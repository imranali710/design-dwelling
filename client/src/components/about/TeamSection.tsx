import { motion } from "framer-motion";
import { teamData } from "@/data/team";
import { fadeInUp, staggerContainer } from "@/lib/framer-animations";

const TeamSection = () => {
  return (
    <div className="mt-24">
      <h3 className="font-playfair font-semibold text-3xl mb-10 text-center">
        Meet Our Team
      </h3>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        {teamData.map((member, index) => (
          <motion.div 
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-xl"
            variants={fadeInUp}
          >
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <div className="p-6">
              <h4 className="font-playfair font-semibold text-xl mb-1">{member.name}</h4>
              <p className="text-slate mb-4">{member.title}</p>
              <p className="text-sm">{member.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TeamSection;
