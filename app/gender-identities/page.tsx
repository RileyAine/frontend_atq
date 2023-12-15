// Import necessary dependencies and components
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

// GenderIdentities component to provide information on gender identities
export default function GenderIdentities() {
	return (
		<main className="content-main">
			{/* Section: Understanding Gender Diversity */}
			<Label className="grid text-3xl justify-self-center items-center border-b-2">
				Understanding Gender Diversity
			</Label>
			<section className="content-section">
				<p>
					{/* Explanation: Celebrating the diversity of gender identities */}
					We celebrate the rich tapestry of gender identities that exist. Gender
					is a complex and diverse aspect of human experience, encompassing a
					spectrum beyond traditional binary concepts.
				</p>
			</section>
			<Separator />

			{/* Section: Common Gender Identities */}
			<section className="content-section">
				<Label className="grid text-2xl justify-self-center">
					Common Gender Identities
				</Label>
				{/* Explanation: Description of non-binary, genderqueer, agender, bigender */}
				<p>
					<strong>Non-Binary:</strong> Non-binary individuals do not exclusively
					identify as male or female. Instead, their gender identity falls
					outside of the traditional binary framework.
				</p>
				<p>
					<strong>Genderqueer:</strong> Genderqueer is an umbrella term for
					gender identities that don&apos;t conform to societal expectations.
				</p>
				<p>
					<strong>Agender:</strong> Agender people identify as having no gender
					or being gender-neutral.
				</p>
				<p>
					<strong>Bigender:</strong> Bigender individuals identify with two
					distinct genders, either simultaneously or at different times.
				</p>
			</section>
			<Separator />

			{/* Section: Respecting Pronouns */}
			<section className="content-section">
				<Label className="grid text-2xl justify-self-center">
					Respecting Pronouns
				</Label>
				{/* Explanation: Emphasizing the importance of using chosen pronouns */}
				<p>
					It&apos;s essential to respect individuals&apos; chosen pronouns.
					Common pronouns include he/him, she/her, and they/them. Always use the
					pronouns someone specifies, as this helps create a more inclusive and
					supportive environment.
				</p>
			</section>
			<Separator />

			{/* Section: Further Exploration */}
			<section className="content-section">
				<Label className="grid text-2xl justify-self-center">
					Further Exploration
				</Label>
				{/* Explanation: Encouragement to explore and learn about different gender identities */}
				<p>
					Gender is a personal and evolving aspect of identity. We encourage you
					to explore and learn more about different gender identities. Remember
					that this list is not exhaustive, and individuals may identify in
					unique and personal ways.
				</p>
			</section>
		</main>
	);
}
